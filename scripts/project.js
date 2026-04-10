import { siteContent } from "../content/site-content.js";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

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
      // Try next extension.
    }
  }

  return "";
};

const createLink = (href, label) => {
  if (!href) return null;
  const link = document.createElement("a");
  link.className = "button button-primary";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
};

const renderProjectDetail = async () => {
  const wrapper = document.querySelector("#project-detail");
  if (!wrapper) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = siteContent.projects.find((item) => item.slug === slug);

  if (!project) {
    wrapper.innerHTML = `
      <div class="project-detail-copy">
        <p class="eyebrow">PROJECTS</p>
        <h1 class="project-detail-title">Project not found.</h1>
        <a class="project-title-link" href="index.html#projects">Back to Projects</a>
      </div>
    `;
    return;
  }

  const imageSource = await resolveImageSource(project.imageBaseName);
  const links = (project.links || []).map((item) => createLink(item.href, item.label)).filter(Boolean);

  wrapper.innerHTML = `
    <div class="project-detail-media">
      ${imageSource ? `<img class="project-detail-poster" src="${imageSource}" alt="${project.posterAlt}">` : `<div class="project-placeholder"><div><strong>${project.title}</strong></div></div>`}
    </div>
    <div class="project-detail-copy">
      <p class="eyebrow">PROJECTS</p>
      <h1 class="project-detail-title">${project.title}</h1>
      <div class="project-meta">
        ${project.year ? `<span><strong>Air Date</strong> ${project.year}</span>` : ""}
        ${project.type ? `<span><strong>Format</strong> ${project.type}</span>` : ""}
        ${project.role ? `<span><strong>Role</strong> ${project.role}</span>` : ""}
      </div>
      ${project.description ? `<p class="project-description"><strong>Synopsis</strong> ${project.description}</p>` : ""}
      ${project.studio ? `<div class="project-facts"><span><strong>Studio / Partner</strong> ${project.studio}</span></div>` : ""}
      <div class="project-detail-links"></div>
      <a class="project-title-link" href="index.html#projects">Back to Projects</a>
    </div>
  `;

  const linksRow = wrapper.querySelector(".project-detail-links");
  links.forEach((link) => linksRow?.appendChild(link));

  document.title = `${project.title} | Stephen Strout`;
  document.querySelector("meta[name='description']")?.setAttribute(
    "content",
    `${project.title} project details for Stephen Strout.`
  );

  wrapper.classList.add("is-visible");
};

renderProjectDetail();
