fetch("data/recipes.json")
  .then((response) => response.json())
  .then((recipes) => {
    const recipeList = document.getElementById("recipe-list");

    recipes.forEach((recipe) => {
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
  })
  .catch((error) => {
    console.error("Error loading recipes:", error);
  });
