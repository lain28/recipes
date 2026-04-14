document.addEventListener("DOMContentLoaded", () => {
  const recipeList = document.getElementById("recipe-list");
  const categoriesToggle = document.getElementById("categoriesToggle");
  const categoryMenu = document.getElementById("categoryMenu");

  let allRecipes = [];
  let currentCategory = "All";

  function renderRecipes() {
    if (!recipeList) return;

    recipeList.innerHTML = "";

    const filtered =
      currentCategory === "All"
        ? allRecipes
        : allRecipes.filter((r) => r.category === currentCategory);

    filtered.forEach((recipe) => {
      const item = document.createElement("a");
      item.className = "recipe-item";
      item.href = recipe.link;

      item.innerHTML = `
        <img class="recipe-thumb" src="${recipe.image}" alt="${recipe.title}">
        <div class="recipe-meta">
          <div class="recipe-title">${recipe.title}</div>
          <div class="recipe-subtitle">${recipe.subtitle || ""}</div>
        </div>
      `;

      recipeList.appendChild(item);
    });
  }

  fetch("data/recipes.json")
    .then((res) => res.json())
    .then((recipes) => {
      allRecipes = recipes;
      renderRecipes();

      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          currentCategory = btn.dataset.category;
          renderRecipes();
        });
      });
    })
    .catch((error) => {
      console.error("Error loading recipes:", error);
    });

  if (categoriesToggle && categoryMenu) {
    categoriesToggle.addEventListener("click", () => {
      categoryMenu.classList.toggle("hidden");
    });
  }
});
