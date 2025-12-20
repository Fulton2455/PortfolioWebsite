// Connor Fulton

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