import { siteContent } from "../content/site-content.js";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setHTML = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = value;
  }
};

const createLink = (href, label, className = "text-link") => {
  if (!href) return null;
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
};

const createImdbLink = (href) => {
  if (!href) return null;
  const link = document.createElement("a");
  link.className = "imdb-link";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", "IMDb Profile");
  link.title = "IMDb Profile";
  link.innerHTML = '<span class="imdb-link-mark" aria-hidden="true">IMDb</span>';
  return link;
};

const resolveImageSource = async (baseName) => {
  if (!baseName) return "";

  for (const extension of imageExtensions) {
    const rawPath = `/public/portfolio/onesheets/${baseName}${extension}`;
    const imagePath = encodeURI(rawPath);

    try {
      const response = await fetch(imagePath, { method: "HEAD" });
      if (response.ok) {
        return imagePath;
      }
    } catch (error) {
      // Try the next common extension.
    }
  }

  return "";
};

const createProjectCard = async (project, index) => {
  const card = document.createElement("article");
  card.className = "project-card-poster reveal";
  card.style.setProperty("--delay", `${Math.min(index * 35, 240)}ms`);

  const detailHref = `project.html?slug=${encodeURIComponent(project.slug)}`;
  const posterLink = document.createElement("a");
  posterLink.className = "project-card-link";
  posterLink.href = detailHref;
  posterLink.setAttribute("aria-label", `Open ${project.title}`);

  const imageSource = await resolveImageSource(project.imageBaseName);
  if (imageSource) {
    const image = document.createElement("img");
    image.className = "project-card-image";
    image.src = project.slug === "state-of-play-trophy-kids" ? `${imageSource}?v=20260410a` : imageSource;
    image.alt = project.posterAlt;
    posterLink.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "project-placeholder project-card-placeholder";
    placeholder.innerHTML = `<div><strong>${project.title}</strong></div>`;
    posterLink.appendChild(placeholder);
  }

  card.appendChild(posterLink);
  return card;
};

const renderProjects = async () => {
  const list = document.querySelector("#projects-list");
  if (!list) return;

  const bySlug = new Map(siteContent.projects.map((project) => [project.slug, project]));
  const leftColumn = document.createElement("div");
  leftColumn.className = "projects-column projects-column--left";

  const rightColumn = document.createElement("div");
  rightColumn.className = "projects-column projects-column--right";

  const columns = document.createElement("div");
  columns.className = "projects-columns";
  const desktopHiddenSlugs = new Set([
    "state-of-play-fighting-chance",
    "state-of-play-fighting-chance-3",
  ]);

  const leftOrder = [
    "saudi-pro-league-kickoff",
    "on-freddie-roach",
    "state-of-play-trophy-kids",
  ];

  const rightOrder = [
    "field-generals-history-of-the-black-quarterback",
    "enigma",
    "the-synanon-fix-did-the-cure-become-a-cult",
    "the-new-normal",
    "state-of-play-fighting-chance-2",
    "state-of-play-culture-shock",
    "state-of-play-broken",
  ];

  const pinned = new Set([...leftOrder, ...rightOrder]);

  for (const [index, slug] of leftOrder.entries()) {
    if (desktopHiddenSlugs.has(slug)) continue;
    const project = bySlug.get(slug);
    if (!project) continue;
    const card = await createProjectCard(project, index);
    if (slug === "on-freddie-roach") {
      card.classList.add("project-card--on-freddie-roach");
    }
    leftColumn.appendChild(card);
  }

  for (const [index, slug] of rightOrder.entries()) {
    if (desktopHiddenSlugs.has(slug)) continue;
    const project = bySlug.get(slug);
    if (!project) continue;
    const card = await createProjectCard(project, index + leftOrder.length);
    if (slug === "field-generals-history-of-the-black-quarterback") {
      card.classList.add("project-card--field-generals-featured");
    }
    rightColumn.appendChild(card);
  }

  const priorityRemaining = [
    "epic-bill",
    "above-and-beyond",
    "chasing-waves",
    "state-of-play-first-wives",
    "black-sky-the-race-for-space",
    "into-pitch-black",
  ];

  const prioritySet = new Set(priorityRemaining);

  for (const [index, slug] of priorityRemaining.entries()) {
    if (pinned.has(slug)) continue;
    if (desktopHiddenSlugs.has(slug)) continue;
    const project = bySlug.get(slug);
    if (!project) continue;
    const card = await createProjectCard(project, index + leftOrder.length + rightOrder.length);
    if (slug === "epic-bill" || slug === "above-and-beyond" || slug === "black-sky-the-race-for-space") {
      leftColumn.appendChild(card);
    } else if (slug === "into-pitch-black") {
      rightColumn.appendChild(card);
    } else if (index % 2 === 0) {
      leftColumn.appendChild(card);
    } else {
      rightColumn.appendChild(card);
    }
  }

  const remainingProjects = siteContent.projects.filter(
    (project) => !pinned.has(project.slug) && !prioritySet.has(project.slug) && !desktopHiddenSlugs.has(project.slug)
  );

  for (const [index, project] of remainingProjects.entries()) {
    const card = await createProjectCard(project, index + leftOrder.length + rightOrder.length + priorityRemaining.length);
    if (project.slug === "against-the-tide" || project.slug === "karaoke-superstars") {
      leftColumn.appendChild(card);
    } else if (index % 2 === 0) {
      leftColumn.appendChild(card);
    } else {
      rightColumn.appendChild(card);
    }
  }

  columns.append(leftColumn, rightColumn);
  list.appendChild(columns);
};

const renderProfileLinks = () => {
  const wrapper = document.querySelector("#profile-links");
  if (!wrapper) return;

  const links = [createImdbLink(siteContent.site.imdb)].filter(Boolean);

  links.forEach((link) => wrapper.appendChild(link));
};

const setupNavigation = () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
};

const setupEmailCopy = () => {
  const emailLink = document.querySelector("#email-link");
  const copyButton = document.querySelector("#copy-email");
  const profileImdbLink = document.querySelector("#profile-imdb-link");
  const profileCvLink = document.querySelector("#profile-cv-link");

  if (emailLink) {
    emailLink.href = `mailto:${siteContent.site.email}`;
  }

  if (profileImdbLink) {
    profileImdbLink.href = siteContent.site.imdb;
    profileImdbLink.target = "_blank";
    profileImdbLink.rel = "noreferrer";
  }

  if (profileCvLink) {
    profileCvLink.href = "/public/STEPHEN-STROUT-CV-2026.pdf";
  }

  if (!copyButton) return;

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(siteContent.site.email);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy Email";
      }, 1800);
    } catch (error) {
      copyButton.textContent = siteContent.site.email;
    }
  });
};

const injectStructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.site.name,
    jobTitle: siteContent.site.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    email: siteContent.site.email,
    sameAs: [siteContent.site.website, siteContent.site.imdb].filter(Boolean),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

const populatePage = () => {
  setText("#brand-name", siteContent.site.name);
  setText("#brand-title", siteContent.site.title);
  setText("#profile-kicker", siteContent.profile.kicker);
  setText("#profile-title", siteContent.profile.title);
  setText("#profile-intro", siteContent.profile.intro);
  setHTML("#recognition-text", siteContent.profile.recognition);
  setText("#projects-intro", siteContent.projectsIntro);
  setText("#contact-heading", siteContent.contact.heading);
  setText("#contact-body", siteContent.contact.body);
  setText("#footer-line", `${siteContent.site.name} • ${siteContent.site.title}`);

  const titleWrap = document.querySelector(".profile-hero-title");
  if (titleWrap && !siteContent.profile.title?.trim()) {
    titleWrap.hidden = true;
  }

  const paragraphs = document.querySelector("#profile-paragraphs");
  siteContent.profile.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.innerHTML = paragraph;
    paragraphs?.appendChild(p);
  });

  document.title = `${siteContent.site.name} | ${siteContent.site.title}`;
};

const init = async () => {
  populatePage();
  renderProfileLinks();
  await renderProjects();
  setupNavigation();
  setupReveal();
  setupEmailCopy();
  injectStructuredData();
};

init();
