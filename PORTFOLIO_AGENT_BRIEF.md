# Film Editor Portfolio Website Agent Brief

This file is written for a coding agent to read and execute.

The website owner is a film editor based in Los Angeles and is not a programmer.
Your job is to build the site end-to-end with minimal back-and-forth, make reasonable assumptions when needed, and leave the project easy to update later.

## Primary Goal

Build a polished personal portfolio website for a Los Angeles film editor.

The site should:

- feel cinematic, elegant, modern, and professional
- showcase selected films and series
- use the provided 1-sheet images as featured portfolio assets
- make it easy for industry contacts to understand the editor's work quickly
- work well on desktop and mobile
- be easy for a non-programmer to update later

## Product Direction

The visual tone should feel:

- refined
- editorial
- film-industry credible
- not flashy in a cheap way
- visually strong without becoming cluttered

Avoid generic startup styling.
Avoid tech-product language.
Avoid purple-heavy default AI design.

Think in the direction of:

- premium film festival materials
- studio campaign pages
- elegant filmmaker portfolio sites

## Tech Direction

Unless there is a strong reason otherwise, use:

- Next.js
- TypeScript
- Tailwind CSS
- a simple local content structure that can later be edited by hand

Preferred deployment target:

- Vercel

If setup choices are needed, optimize for:

1. simplicity for a non-technical owner
2. visual quality
3. easy future edits

## Content Model

Design the site so content can be updated from a single obvious place.

Create a simple content source for:

- editor name
- title/tagline
- short bio
- selected credits
- featured projects
- contact email
- optional Instagram / IMDb / Vimeo links

Each featured project should support:

- title
- type (film, series, short, documentary, etc.)
- year
- role
- short description
- 1-sheet image
- optional still gallery later
- optional trailer link later

## Required Pages / Sections

At minimum build:

1. Home / landing page
2. Featured work section
3. About section
4. Selected credits section
5. Contact section

The homepage should be enough for version 1, but structure the project so extra pages can be added later if useful.

## Image Handling

There will be multiple 1-sheet images for films and series.

You should:

- create a clear folder for raw portfolio images
- optimize display sizing appropriately
- preserve image quality
- avoid layout shift
- use responsive image behavior
- make the presentation feel premium

If the images are not yet in the repo, create the folder structure and leave clear placeholder instructions.

## UX Expectations

The website should:

- immediately communicate who the editor is
- highlight the strongest projects fast
- be easy to skim by producers, directors, and collaborators
- have clear contact pathways
- feel intentional on mobile, not merely compressed desktop

Include:

- strong typography
- tasteful spacing
- subtle motion only where it adds value
- confident image presentation

## Accessibility / Quality

Please ensure:

- semantic HTML
- keyboard accessibility
- sufficient contrast
- alt text support for images
- good performance
- basic SEO metadata
- social sharing metadata if reasonable

## Non-Negotiables

- Do not leave the site looking like a default template.
- Do not make the owner edit code in many places.
- Do not block on missing content unless truly necessary.
- If content is missing, scaffold clean placeholders and document exactly what the owner should replace.

## Deliverables

Build the project and leave:

1. a working local site
2. a clearly named content file or files for future edits
3. a README with simple non-technical instructions:
   - where to put images
   - where to edit text
   - how to run locally
   - how to deploy
4. sensible placeholder content if real content is not yet present

## Working Style

The owner is not technical.
Do not overwhelm them.
Make reasonable assumptions and move forward.
When choices are non-obvious, choose the option that reduces maintenance burden.

If you need placeholder content, use tasteful realistic placeholders and mark them clearly.

## Recommended Build Order For One Main Agent

1. Initialize the project.
2. Create the content model and image folder structure.
3. Build the homepage and major sections.
4. Add responsive styling and motion.
5. Add metadata, accessibility polish, and README.
6. Test the build locally.

## Parallel Work Plan

If multiple coding-agent sessions are available, use the split below.

Important:

- Each parallel agent should own different files where possible.
- Do not overwrite each other's work.
- Coordinate through small well-scoped responsibilities.

### Agent 1: Project Scaffold + Architecture

Responsibilities:

- initialize the app
- set up Next.js, TypeScript, Tailwind
- create base folder structure
- create content/data model
- create image asset folders
- create shared layout shell
- create README skeleton

Suggested owned files/folders:

- package setup
- app layout
- global styles
- content files
- public portfolio image folders
- README

Definition of done:

- app runs
- content structure exists
- placeholders are wired in

### Agent 2: Homepage + Visual Design

Responsibilities:

- design and implement the homepage experience
- hero section
- featured projects presentation
- about section
- credits section
- contact section
- responsive behavior
- tasteful motion and layout polish

Suggested owned files/folders:

- homepage route
- homepage components
- section components

Definition of done:

- homepage looks intentional and premium
- mobile and desktop both feel designed

### Agent 3: Content Entry + Portfolio Population

Responsibilities:

- organize provided project data
- add placeholder entries if final copy is missing
- wire project cards to image assets
- create concise, professional portfolio copy structure
- ensure content is easy to edit later

Suggested owned files/folders:

- content data files
- image mapping
- text placeholders

Definition of done:

- at least several sample/real projects render correctly
- editing process is obvious

### Agent 4: QA + Accessibility + Deployment Readiness

Responsibilities:

- check responsiveness
- check accessibility basics
- improve metadata and SEO
- confirm images load correctly
- verify no broken links or empty states
- test production build
- improve README deployment instructions

Suggested owned files/folders:

- metadata config
- QA fixes across app
- deployment notes

Definition of done:

- project builds cleanly
- obvious usability issues are fixed
- owner instructions are clear

## What To Ask The Owner For

If inputs are missing, ask for these in the smallest possible number of requests:

1. editor name
2. short bio
3. email for contact
4. social or IMDb/Vimeo links if any
5. list of featured projects
6. 1-sheet images for each project
7. selected credits list

If the owner has not provided all of this yet, proceed with placeholders and leave a checklist in the README.

## Suggested Content Folder Structure

Use something like:

```text
public/
  portfolio/
    project-slug/
      onesheet.jpg

src/
  content/
    site.ts
    projects.ts
    credits.ts
```

If using the App Router, adapt the exact paths as needed.

## Desired Final Outcome

At the end, the owner should have:

- a tasteful live-editable portfolio site
- a clear place to drop in project images
- a clear place to update text
- a clean path to deployment

## Instructions To The Human Owner

Use this file as the brief you hand to your coding agent.

If you want to run multiple coding-agent sessions in parallel, give them these assignments:

1. Session A reads this file and takes Agent 1 responsibilities.
2. Session B reads this file and takes Agent 2 responsibilities.
3. Session C reads this file and takes Agent 3 responsibilities.
4. Session D reads this file and takes Agent 4 responsibilities.

Tell each session:

"Read `PORTFOLIO_AGENT_BRIEF.md`. You own only the responsibilities for Agent X. Check the repo first, do not overwrite other agents' work, and complete your slice fully."

## What You Should Do Next

As the owner, your next steps are:

1. Put your project images into this repo once the folders exist.
2. Prepare a short text document with:
   - your name
   - your short bio
   - your email
   - your featured projects
   - your selected credits
   - any links you want included
3. Start one coding-agent session with this exact instruction:

```text
Read PORTFOLIO_AGENT_BRIEF.md and execute the project. Make reasonable assumptions, build the website, and leave the project easy for a non-programmer to update.
```

4. If using multiple sessions, assign them by the parallel roles described above.

## Optional Better Prompt For The Main Coding Agent

```text
Read PORTFOLIO_AGENT_BRIEF.md and build the site end-to-end. This is a portfolio website for a Los Angeles film editor. Prioritize strong visual design, mobile polish, easy content editing, and a non-technical owner experience. If assets or final copy are missing, scaffold tasteful placeholders and document exactly what needs to be replaced.
```
