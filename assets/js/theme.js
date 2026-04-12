document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const homeButton = document.getElementById("homeButton");

  function updateThemeIcon() {
    if (!themeToggle) return;

    if (body.classList.contains("dark")) {
      themeToggle.textContent = "☀";
      themeToggle.setAttribute("title", "Switch to light mode");
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeToggle.textContent = "🌙";
      themeToggle.setAttribute("title", "Switch to dark mode");
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  const sidebarState = localStorage.getItem("sidebarCollapsed");
  if (sidebarState === "true" && sidebar) {
    sidebar.classList.add("collapsed");
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
      updateThemeIcon();
    });
  }

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      localStorage.setItem(
        "sidebarCollapsed",
        sidebar.classList.contains("collapsed") ? "true" : "false"
      );
    });
  }

  if (homeButton) {
    homeButton.addEventListener("click", () => {
      const inRecipesFolder = window.location.pathname.includes("/recipes/");
      window.location.href = inRecipesFolder ? "../index.html" : "index.html";
    });
  }
});
