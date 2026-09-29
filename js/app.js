const discoverButton = document.querySelector("#discover-button");
const routesSection = document.querySelector("#rutas");
const routeFilter = document.querySelector("#route-filter");
const routeCards = [...document.querySelectorAll(".route-card")];
const resultsMessage = document.querySelector("#results-message");
const favoriteButtons = document.querySelectorAll(".favorite-button");
const favoriteCount = document.querySelector("#favorite-count");
const currentYear = document.querySelector("#current-year");

discoverButton.addEventListener("click", () => {
    routesSection.scrollIntoView({ behavior: "smooth" });
});

routeFilter.addEventListener("change", () => {
    const selectedCategory = routeFilter.value;
    let visibleRoutes = 0;

    routeCards.forEach((card) => {
        const shouldShow =
            selectedCategory === "todas" || card.dataset.category === selectedCategory;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleRoutes += 1;
        }
    });

    const routeWord = visibleRoutes === 1 ? "ruta" : "rutas";
    resultsMessage.textContent = `Se muestran ${visibleRoutes} ${routeWord}.`;
});

favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isFavorite = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!isFavorite));
        button.querySelector("[aria-hidden='true']").textContent = isFavorite ? "♡" : "♥";

        const totalFavorites = document.querySelectorAll(
            '.favorite-button[aria-pressed="true"]'
        ).length;

        favoriteCount.textContent = totalFavorites;
    });
});

currentYear.textContent = new Date().getFullYear();
