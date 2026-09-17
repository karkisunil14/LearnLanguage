Read AGENTS.md first and follow it strictly.

Use the installed skills for stream and vision agents and implement realtime live captions in the Audio Lesson screen for both the AI teacher's speech and the user's speech, as they happen.

Define the caption event contract explicitly: speaker (teacher vs. user), text, partial vs. final status, a segment identifier for ordering, and how duplicates/replacements are handled. A partial event replaces the prior partial text for its own segment/speaker (never mixing speakers), and a final event replaces the last partial for that segment without duplicating it in the transcript. Remove the caption listeners both when the call ends and when the screen unmounts, using the existing Stream call setup and Vision Agent cleanup lifecycle.