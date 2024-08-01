document.addEventListener("DOMContentLoaded", function() {
    windo.scrollTo(0, 0);
    const ingredientsElement = document.querySelector(".ingredients");
    const recipeElement = document.querySelector(".recipe");
    const bottomElement = document.querySelector(".bottom");
    const h1Element = document.querySelector("h1");
    const topElement = document.querySelector(".top");
    const photoElement = document.querySelector(".photo");

    h1Element.innerHTML = "<img src='./resources.title.png'>";

    function fadeInIngredients() {
        return new Promise((resolve) => {
            ingredientsElement.style.opacity = "1";
            ingredientsElement.style.transform = "translateX(0)";

            ingredientsElement.addEventListener("transitioned", function() {
                resolve();
            }, {once: true});
        });
    }

    function fadeInRecipe() {
        return new Promise((resolve) => {
            recipeElement.style.opacity = "1";
            recipeElement.style.transform = "translateX(0)";

            recipeElement.addEventListener("transitioned", function() {
                resolve();
            }, {once: true});
        });
    }

    function fadeInBottom () {
        return new Promise((resolve) => {
            bottomElement.style.opacity = "1";
            bottomElement.style.transform = "translateX(0)";

            bottomElement.addEventListener("transitioned", function() {
                resolve();
            }, {once: true});
        });
    }

    function fadeInHeaderAndPhoto() {
        h1Element.style.opacity = "1";
        h1Element.style.transform = "translateY(0)";
        topElement.style.opacity = "1";
        topElement.style.transform = "translateY(0)";
        photoElement.style.opacity = "1";
        photoElement.style.transform = "translateY(0)";
    }

    async function runAnimations() {
        await fadeInIngredients();
        await fadeInRecipe();
        await fadeInBottom();
        fadeInHeaderAndPhoto();
    }

    setTimeout(runAnimations, 250);
})