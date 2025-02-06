
function getWebDrinkRecipeCategories()
{
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json()
        });
}

function getWebDrinkRecipeDrinks(category)
{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json()
        });
}

function getWebDrinkRecipeSearch(input)
{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json()
        });
}

export {getWebDrinkRecipeCategories, getWebDrinkRecipeDrinks, getWebDrinkRecipeSearch};