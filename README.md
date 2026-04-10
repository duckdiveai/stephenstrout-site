# Stephen Strout Portfolio Site

This website is set up to be easy to update, even if you have never edited a site before.

Most of the time, you only need to do 2 things:

1. Add images to the image folder
2. Edit text in one content file

## The 3 Main Files

These are the only files you will usually need:

- [content/site-content.js](/Users/duckdive/Documents/Ss-Website/content/site-content.js)
  This is where you edit the text, project titles, links, and credits.

- [public/portfolio/onesheets](/Users/duckdive/Documents/Ss-Website/public/portfolio/onesheets)
  This is where you put poster images and other portfolio images.

- [README.md](/Users/duckdive/Documents/Ss-Website/README.md)
  This guide.

## How To Change Text

Open this file:

- [content/site-content.js](/Users/duckdive/Documents/Ss-Website/content/site-content.js)

Inside that file, you can update:

- your name
- your bio
- featured projects
- gallery items
- selected credits
- email address
- IMDb / website / social links

If you see text that says `Replace later:`, that means it is a temporary placeholder and can be swapped for final copy later.

## How To Add Or Replace Images

Put your image files here:

- [public/portfolio/onesheets](/Users/duckdive/Documents/Ss-Website/public/portfolio/onesheets)

Important:

- Keep the filename the same as the one listed in `content/site-content.js`
- You do not need to type `.png` or `.jpg` in the content file
- The site automatically checks for `.jpg`, `.jpeg`, `.png`, `.webp`, and `.avif`

Example:

- If the content file says `imageBaseName: "Field_Generals"`
- then the image can be `Field_Generals.png`
- or `Field_Generals.jpg`

If an image does not show up:

1. Check that the image is in `public/portfolio/onesheets`
2. Check that the filename matches exactly
3. Check for spaces, underscores, and capital letters

## How To Preview The Site On Your Computer

### Easiest Way

1. Open this folder:

- [/Users/duckdive/Documents/Ss-Website](/Users/duckdive/Documents/Ss-Website)

2. Double-click this file:

- [Preview-Site.command](/Users/duckdive/Documents/Ss-Website/Preview-Site.command)

3. A Terminal window will open and start the site
4. Safari should open automatically
5. If port `4321` is busy, the preview file will use `8000`, `8080`, or `9000` instead
6. When you are done, go back to Terminal and press `Control + C`

### Manual Way

If you prefer Terminal, do this:

1. Open `Terminal`
2. Copy and paste this command, then press Enter:

```bash
cd "/Users/duckdive/Documents/Ss-Website"
```

3. Then run this command:

```bash
python3 -m http.server 4321
```

4. Open this in Safari or any web browser:

[http://localhost:4321](http://localhost:4321)

If that port is busy, try one of these instead:

- [http://localhost:8000](http://localhost:8000)
- [http://localhost:8080](http://localhost:8080)
- [http://localhost:9000](http://localhost:9000)

5. When you are done, go back to Terminal and press `Control + C`

## Easy Update Workflow

If you just want to update the site, use this order:

1. Add or replace images in `public/portfolio/onesheets`
2. Edit text in `content/site-content.js`
3. Preview the site locally
4. Deploy the updated version

## How To Deploy To Vercel

Vercel is a simple way to put the site online.

Basic steps:

1. Put this project in GitHub
2. Log into Vercel
3. Import the GitHub project
4. If Vercel asks what type of project this is, choose `Other`
5. Click deploy

After that, Vercel will give you a live website link.

## Current Things To Replace Later

These are the only known placeholders still on the site:

- add the final director name for `Saudi Pro League: Kickoff`
- add a project page link for `The Synanon Fix` if you want one shown
- replace the contact note if you want management, representation, or phone details listed

## If You Want Help Later

The safest file to edit is:

- [content/site-content.js](/Users/duckdive/Documents/Ss-Website/content/site-content.js)

That file was designed to be the main control center for future updates.
