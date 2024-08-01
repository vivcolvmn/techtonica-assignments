document.addEventListener("DOMContentLoaded", function() {
    windo.scrollTo(0, 0);
    const ingredientsElement = document.querySelector(".ingredients");
    const recipeElement = document.querySelector(".recipe");
    const bottomElement = document.querySelector(".bottom");
    const h1Element = document.querySelector("h1");
    const topElement = document.querySelector(".top");
    const photoElement = document.querySelector(".photo");

    h1Element.innerHTML = "<img src='./resources.title.png'>";

    function fadeInRecipes() {
        return new Promise((resolve) => {
            ingredientsElement.style.opacity = "1";
            ingredientsElement.style.transform = "translateX(0)";

            ingredientsElement.addEventListener("transitioned", function() {
                resolve();
            }, {once: true});
        });
    }

    
})