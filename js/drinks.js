import {getWebDrinkRecipeCategories, getWebDrinkRecipeDrinks, getWebDrinkRecipeSearch} from './fetchDrinks.js';
import {RecipeCard} from './RecipeCard.js';

let drinksArticle = document.querySelector('#drinks-article');
let noDrinksFound = document.querySelector('#no-drinks-found');


// Create Drink Card Box
let createDrinkCardBox = (drink) => 
{
    let cardBoxRecipe = document.createElement('div');
    cardBoxRecipe.classList.add("card-box-recipe");
    cardBoxRecipe.setAttribute("aria-live", "polite");

    let recipeCard = new RecipeCard("Drink", drink.idDrink, drink.strDrink, drink.strDrinkThumb);
    cardBoxRecipe.innerHTML = recipeCard.toInnerHTML();

    drinksArticle.appendChild(cardBoxRecipe);
}


// Fetch and Display All Drinks Categories
getWebDrinkRecipeCategories().then((cdata) => 
{
    for(let i = 0; i < cdata.drinks.length; i++)
    {
        if(cdata.drinks[i].strCategory === "Cocktail")
        {
            getWebDrinkRecipeDrinks(cdata.drinks[i].strCategory).then((data) => 
            {
                for(let j = 0; j < data.drinks.length; j++)
                {
                    createDrinkCardBox(data.drinks[j]);
                }
            });
        }
    }
    noDrinksFound.innerText = `Drinks result for cocktail`;
})    
.catch((error) => {
    noDrinksFound.innerText = `No drinks result!`;
});


// Fetch and Display Searched Drinks
let searchDrink = () =>
{
    const drinkInput = document.getElementById('drinks-input').value;

    // Check If User Searched For Anything
    if(drinkInput)
    {
        // Clear the No Drink Found Tag For Every Single New Search
        noDrinksFound.innerText= ``;

        // Clear the Drink Info Article For Every Single New Search
        drinksArticle.innerHTML = ``;

        getWebDrinkRecipeSearch(drinkInput).then((data) => 
        {
            let drinks = data.drinks;
            // Check If Searched Drink Is Found Or Not
            if(drinks){
                drinks.forEach(drink => {
                    createDrinkCardBox(drink);
                    noDrinksFound.innerText = `Drinks result for ${drinkInput}`;
                });
            }
            else{
                noDrinksFound.innerText = `No drink found for ${drinkInput}!`;
            }
        });
    }
    else{
        // Clear the Drink Info Article For Every Single New Search
        drinksArticle.innerHTML = ``;
        
        noDrinksFound.innerText = `You haven't entered anything`;
    }
}


// Execute a function when the user click the button
document.getElementById('drinks-submit').addEventListener('click', searchDrink);

// Execute a function when the user presses a key on the keyboard
document.getElementById('drinks-input').addEventListener("keypress", function(event)
{
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('drinks-submit').click();
    }
});