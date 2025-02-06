import {getWebMealRecipeCategories, getWebMealRecipeMeals, getWebMealRecipeSearch} from './fetchMeals.js';
import {RecipeCard} from './RecipeCard.js';

let mealsArticle = document.querySelector('#meals-article');
let noMealsFound = document.querySelector('#no-meals-found');


// Create Meal Card Box
let createMealCardBox = (meal) => 
{
    let cardBoxRecipe = document.createElement('div');
    cardBoxRecipe.classList.add("card-box-recipe");
    cardBoxRecipe.setAttribute("aria-live", "polite");

    let recipeCard = new RecipeCard("Meal", meal.idMeal, meal.strMeal, meal.strMealThumb);
    cardBoxRecipe.innerHTML = recipeCard.toInnerHTML();

    mealsArticle.appendChild(cardBoxRecipe);
}


// Fetch and Display All Meals Categories
getWebMealRecipeCategories().then((cdata) => 
{
    for(let i = 0; i < cdata.meals.length; i++)
    {
        if(cdata.meals[i].strCategory === "Seafood")
        {
            getWebMealRecipeMeals(cdata.meals[i].strCategory).then((data) => 
            {
                for(let j = 0; j < data.meals.length; j++)
                {
                    createMealCardBox(data.meals[j]);
                }
            });
        }
    }
    noMealsFound.innerText = `Meals result for the sea`;
})    
.catch((error) => {
    noMealsFound.innerText = `No meals result!`;
});


// Fetch and Display Searched Meals
let searchMeal = () =>
{
    const mealInput = document.getElementById('meals-input').value;

    // Check If User Searched For Anything
    if(mealInput)
    {
        // Clear the No Meal Found Tag For Every Single New Search
        noMealsFound.innerText = ``;

        // Clear the Meal Info Article For Every Single New Search
        mealsArticle.innerHTML = ``;

        getWebMealRecipeSearch(mealInput).then((data) => 
        {
            let meals = data.meals;
            // Check If Searched Meal Is Found Or Not
            if(meals){
                meals.forEach(meal => {
                    createMealCardBox(meal);
                    noMealsFound.innerText = `Meals result for ${mealInput}`;
                });
            }
            else{
                noMealsFound.innerText = `No meal found for ${mealInput}!`;
            }
        });
    }
    else{
        // Clear the Meal Info Article For Every Single New Search
        mealsArticle.innerHTML = ``;
        
        noMealsFound.innerText = `You haven't entered anything`;
    }
}


// Execute a function when the user click the button
document.getElementById('meals-submit').addEventListener('click', searchMeal);

// Execute a function when the user presses a key on the keyboard
document.getElementById('meals-input').addEventListener("keypress", function(event)
{
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('meals-submit').click();
    }
});