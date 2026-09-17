from typing import Any

from dotenv import load_dotenv

from vision_agents.core import Agent, Runner, User
from vision_agents.core.agents import AgentLauncher
from vision_agents.plugins import getstream, openai

load_dotenv()

# The lesson call always carries a `languageName` custom field (see
# src/app/api/stream/call+api.ts), so this only matters for local `run` testing
# where the call has no custom data attached.
DEFAULT_TARGET_LANGUAGE = "Spanish"


def build_instructions(target_language: str, lesson: dict[str, Any] | None = None) -> str:
    instructions = (
        "You are Lingo, a friendly AI language teacher for a Duolingo-style app. "
        "You always speak English yourself - never switch to the target language "
        f"for your own speech. Your job is to teach the student {target_language} "
        "by explaining vocabulary, pronunciation, and grammar entirely through "
        "English, giving short examples in the target language when useful and "
        "immediately translating them back to English. Keep responses short, "
        "warm, and conversational, and check in with the student often."
    )

    if not lesson:
        return instructions

    parts = [instructions]

    lesson_title = lesson.get("lessonTitle")
    if lesson_title:
        parts.append(f'Today\'s lesson is "{lesson_title}".')

    goals = lesson.get("goals") or []
    if goals:
        parts.append("Lesson goals: " + "; ".join(goals) + ".")

    vocabulary = lesson.get("vocabulary") or []
    if vocabulary:
        words = ", ".join(f"{word['term']} ({word['translation']})" for word in vocabulary)
        parts.append(f"Vocabulary to cover: {words}.")

    phrases = lesson.get("phrases") or []
    if phrases:
        phrase_list = ", ".join(f"\"{phrase['text']}\" ({phrase['translation']})" for phrase in phrases)
        parts.append(f"Key phrases to teach: {phrase_list}.")

    explanation = (lesson.get("aiTeacherPrompt") or {}).get("explanation")
    if explanation:
        parts.append(explanation)

    return " ".join(parts)


async def create_agent(**kwargs) -> Agent:
    return Agent(
        edge=getstream.Edge(),
        agent_user=User(name="Lingo", id="lingo-teacher"),
        instructions=build_instructions(DEFAULT_TARGET_LANGUAGE),
        # Voice only: no video is sent to or expected from the model.
        llm=openai.Realtime(voice="marin", send_video=False),
    )


async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs) -> None:
    call = await agent.create_call(call_type, call_id)

    lesson = call.custom_data or {}
    target_language = lesson.get("languageName", DEFAULT_TARGET_LANGUAGE)
    agent.llm.set_instructions(build_instructions(target_language, lesson))

    async with agent.join(call):
        greeting = (
            f"Greet the student in English and tell them you'll be teaching "
            f"them {target_language} today."
        )
        intro_line = (lesson.get("aiTeacherPrompt") or {}).get("intro")
        if intro_line:
            greeting += f' Naturally weave in this opening line: "{intro_line}"'

        await agent.simple_response(text=greeting)
        await agent.finish()


runner = Runner(AgentLauncher(create_agent=create_agent, join_call=join_call))

if __name__ == "__main__":
    runner.cli()
