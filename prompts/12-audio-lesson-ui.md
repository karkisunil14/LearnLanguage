Read AGENTS.md first and follow it strictly.

Implement the AI Teacher audio lesson screen exactly as shown in the attached design. When the user taps any lesson from the Learn/Lessons screen, open this screen with the selected lesson id and display the selected lesson’s language, title, goal, phrases, and AI teacher context from the hardcoded learning data.

Note: `CustomTabBar` navigates to the `ai-teacher` tab by route name only (`navigation.navigate(route.name)`), with no `lessonId`. Since the AI Teacher tab can be opened directly (not just via a lesson card), define what this screen shows in that case — e.g. fall back to the learner's current/next lesson (see `getCurrentLesson`) or show a lesson picker — while still preserving the selected-lesson data flow when navigation originates from Learn/Lessons.

This should be an audio-only experience. Do not implement video calling. Keep the camera area as a visual teacher preview/placeholder only if needed, and focus on audio lesson controls such as mic, subtitles, end call, lesson feedback, teacher response bubble, and session status.

Use assets from the assets folder via the centralized images import and keep everything consistent with the existing design system and bottom tab navigation.

@prompt_material/07-audio-lesson-screen.png