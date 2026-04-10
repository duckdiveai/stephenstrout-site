# Portfolio Agent Prompts

Use these prompts when starting coding-agent sessions for the portfolio site.

Before launching parallel sessions, make sure one session has created the project scaffold first.
That prevents agents from colliding with each other.

## Files The Agent Should Read

Tell every agent to read:

- `PORTFOLIO_AGENT_BRIEF.md`
- `PORTFOLIO_CONTENT_TEMPLATE.txt`

If your project images are already in the repo, tell the agent to use them.

## Best Order

Recommended order:

1. Run the Main Agent prompt alone first, or run Session A first.
2. Once the scaffold exists, start the other sessions.
3. After the other sessions finish, run the QA session last.

## Option 1: One Main Agent

Use this if you want a single coding-agent session to do everything.

```text
Read PORTFOLIO_AGENT_BRIEF.md and PORTFOLIO_CONTENT_TEMPLATE.txt and build the site end-to-end.

This is a portfolio website for a Los Angeles film editor.
Use the content in the template file as the source of truth.
If any information is missing, make tasteful placeholder assumptions and clearly mark what should be replaced later.

Requirements:
- Build a polished, cinematic, premium-feeling portfolio site
- Make it mobile-friendly and professional
- Use the provided 1-sheet images for featured projects when available
- Keep content easy for a non-programmer to update
- Create a clear place for future content edits
- Add a README with simple instructions for images, text edits, local run, and deployment
- Test the project locally before finishing

Please execute the work directly instead of only describing a plan.
```

## Option 2: Parallel Sessions

Use these if you want multiple coding-agent sessions running in parallel.

Important:

- Start Session A first, or finish the scaffold with the Main Agent first.
- Then launch Sessions B and C.
- Run Session D after the others have mostly finished.

## Session A Prompt

```text
Read PORTFOLIO_AGENT_BRIEF.md and PORTFOLIO_CONTENT_TEMPLATE.txt.

You own Agent 1 responsibilities only: Project Scaffold + Architecture.

Your job:
- initialize the app
- set up Next.js, TypeScript, and Tailwind CSS
- create the base folder structure
- create the content/data model
- create image asset folders
- create the shared layout shell
- create the initial README skeleton

Rules:
- Check the repo first and do not overwrite unrelated work
- Make reasonable assumptions
- Optimize for a non-technical owner
- Leave the site easy to update later

Definition of done:
- the app runs
- the structure is in place
- placeholders are wired in

Complete your slice fully.
```

## Session B Prompt

```text
Read PORTFOLIO_AGENT_BRIEF.md and PORTFOLIO_CONTENT_TEMPLATE.txt.

You own Agent 2 responsibilities only: Homepage + Visual Design.

Assume the project scaffold already exists.

Your job:
- design and implement the homepage experience
- create the hero section
- build the featured projects presentation
- build the about section
- build the selected credits section
- build the contact section
- make desktop and mobile both feel intentional
- add tasteful motion and visual polish

Rules:
- Check the repo first and do not overwrite unrelated work
- Preserve the established project structure
- Do not edit content architecture unless needed for your slice
- Aim for a cinematic, premium, editorial visual feel

Definition of done:
- homepage feels polished and custom
- layout works well on mobile and desktop
```

## Session C Prompt

```text
Read PORTFOLIO_AGENT_BRIEF.md and PORTFOLIO_CONTENT_TEMPLATE.txt.

You own Agent 3 responsibilities only: Content Entry + Portfolio Population.

Assume the project scaffold already exists.

Your job:
- organize the provided project data
- populate the content files from PORTFOLIO_CONTENT_TEMPLATE.txt
- add placeholder entries only if information is missing
- wire project data to the correct image assets when available
- make the content easy to edit later
- keep the copy concise, professional, and film-industry appropriate

Rules:
- Check the repo first and do not overwrite unrelated work
- Prefer updating the designated content files rather than scattering text across components
- Keep the editing workflow simple for a non-programmer

Definition of done:
- real or placeholder projects render cleanly
- content lives in obvious editable files
```

## Session D Prompt

```text
Read PORTFOLIO_AGENT_BRIEF.md and PORTFOLIO_CONTENT_TEMPLATE.txt.

You own Agent 4 responsibilities only: QA + Accessibility + Deployment Readiness.

Assume the main implementation already exists.

Your job:
- check responsive behavior
- check accessibility basics
- improve metadata and SEO
- confirm images load correctly
- verify there are no broken links or bad empty states
- test the production build
- improve the README deployment instructions

Rules:
- Check the repo first and do not overwrite unrelated work
- Focus on fixes, polish, validation, and deployment readiness
- Keep instructions simple for a non-technical owner

Definition of done:
- project builds cleanly
- obvious issues are fixed
- deployment and editing instructions are clear
```

## Recommended Human Workflow

If you are managing the sessions yourself, do this:

1. Start Session A.
2. Wait until the scaffold exists.
3. Start Session B and Session C.
4. After those are mostly complete, start Session D.
5. If you prefer less coordination, use the Main Agent prompt instead.

## What To Tell The Agent If It Asks Questions

If an agent asks too many design or technical questions, reply with:

```text
Please make reasonable assumptions, move forward, and optimize for a polished portfolio site that is easy for a non-programmer to update later.
```

If an agent asks what matters most, reply with:

```text
Prioritize visual quality, mobile polish, easy content editing, and professional presentation of the featured projects.
```
