import {getWebMealInfo} from './fetchMealInfo.js';
import {isEmpty} from './utils.js';

const params = new URLSearchParams(document.location.search);
const idMeal = params.get('id');


// Fetch and Display Meal info

getWebMealInfo(idMeal).then((data) => 
{
    let recipeTitle = document.querySelector('#recipe-title');
    let recipeImg = document.querySelector('#meal-info-pic img');
    let recipeIngredients = document.querySelector('#recipe-ingredients');
    let recipenstructions = document.querySelector('#recipe-instructions');

    let strLiList = "";
    // check if the maximun of 20 ingredients are empty,
    // if not empty, then add it to the <li> list.
    for(let i = 1; i <= 20; i++){
        if(!isEmpty(data.meals[0]["strIngredient" + i])){
            strLiList += '<li><i aria-hidden="true" class="fa fa-fw fa-check"></i> ';
            if(!isEmpty(data.meals[0]["strMeasure" + i])) strLiList += data.meals[0]["strMeasure" + i] + ' ';
            strLiList += data.meals[0]["strIngredient" + i];
            strLiList += '</li>';
        }
    }

    recipeTitle.innerHTML = '<i aria-hidden="true" class="fa fa-fw fa-cutlery"></i> ' + data.meals[0].strMeal;
    recipeImg.src = data.meals[0].strMealThumb;
    recipeImg.alt = data.meals[0].strMeal;
    recipeIngredients.innerHTML = strLiList;
    recipenstructions.innerHTML = data.meals[0].strInstructions;
})
.catch((error) => {

});