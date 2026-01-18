// Connor Fulton


// Project Card array
const projects = [
  {
    id: "depthchart",
    title: "Depth Chart Component",
    description:
      "A Java app that reads football rosters and manages depth charts using file I/O and Collections.",
    imageHome: "Images/depthchart.png",
    imageProjects: "../Images/depthchart.png",
    linkHome: "Projects/depthchart.html",
    linkProjects: "depthchart.html",
    featured: true,
    tech: ["Java", "Collections", "File I/O"]
  },
  {
    id: "portfolio",
    title: "Fulton2455 Website",
    description:
      "This portfolio and personal website built with HTML, CSS, and JavaScript.",
    imageHome: "Images/Fulton2455.png",
    imageProjects: "../Images/Fulton2455.png",
    linkHome: "Projects/fulton2455.html",
    linkProjects: "fulton2455.html",
    featured: true,
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

// Dark/Light Mode Code
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";
body.classList.add(`${savedTheme}-mode`);

if (toggleButton) {
  toggleButton.textContent =
    savedTheme === "dark" ? "☀ Light" : "🌙 Dark";

  toggleButton.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");

    body.classList.remove(isDark ? "dark-mode" : "light-mode");
    body.classList.add(isDark ? "light-mode" : "dark-mode");

    localStorage.setItem("theme", isDark ? "light" : "dark");

    toggleButton.textContent =
  body.classList.contains("dark-mode") ? "☀ Light" : "🌙 Dark";
  });
}

// Render Projects
function renderProjects(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  const {
    featuredOnly = false,
    imageKey = "imageHome",
    linkKey = "linkHome"
  } = options;

  const filteredProjects = featuredOnly
    ? projects.filter(p => p.featured)
    : projects;

  filteredProjects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project[imageKey]}" alt="${project.title} thumbnail">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tech-list">
        ${project.tech.map(t => `<li>${t}</li>`).join("")}
      </ul>
      <a href="${project[linkKey]}" class="card-button">View Project</a>
    `;

    container.appendChild(card);
  });
}

const projectsContainer = document.getElementById("projects-container");
const page = document.body.dataset.page;

if (projectsContainer) {
  if (page === "home") {
    renderProjects("projects-container", {
      featuredOnly: true,
      imageKey: "imageHome",
      linkKey: "linkHome"
    });
  }

  if (page === "projects") {
    renderProjects("projects-container", {
      featuredOnly: false,
      imageKey: "imageProjects",
      linkKey: "linkProjects"
    });
  }
}