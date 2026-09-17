Read AGENTS.md first and follow it strictly.

Use the installed GetStream agent skills and the Stream docs to implement Stream audio call setup for the selected lesson flow. When a user taps a lesson, keep the existing Audio Lesson screen UI and add the ability to start, join, mute/unmute, and end an audio-only Stream call.

Use Expo API routes for Stream token generation and call creation. Do not expose Stream secrets in the Expo app. In those API routes, verify the Clerk session server-side (e.g. with `@clerk/backend`) and derive the user ID from that verified session — never trust a client-supplied user ID. Validate the submitted lesson and language against the hardcoded catalog (`data/lessons.ts`, `data/units.ts`) and use the matching canonical records — never trust client-supplied lesson/language fields directly — when creating the call/session.

Preserve the existing UI and lesson data. Add clear loading, joined, error, muted, connecting, ended states and user info on audio ui.