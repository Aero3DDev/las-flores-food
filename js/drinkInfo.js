import {getWebDrinkInfo} from './fetchDrinkInfo.js';
import {isEmpty} from './utils.js';

const params = new URLSearchParams(document.location.search);
const idDrink = params.get('id');


// Fetch and Display Drink info

getWebDrinkInfo(idDrink).then((data) => 
{
    let recipeTitle = document.querySelector('#recipe-title');
    let recipeImg = document.querySelector('#drink-info-pic img');
    let recipeIngredients = document.querySelector('#recipe-ingredients');
    let recipenstructions = document.querySelector('#recipe-instructions');

    let strLiList = "";
    // check if the maximun of 15 ingredients are empty,
    // if not empty, then add it to the <li> list.
    for(let i = 1; i <= 15; i++){
        if(!isEmpty(data.drinks[0]["strIngredient" + i])){
            strLiList += '<li><i aria-hidden="true" class="fa fa-fw fa-check"></i> ';
            if(!isEmpty(data.drinks[0]["strMeasure" + i])) strLiList += data.drinks[0]["strMeasure" + i] + ' ';
            strLiList += data.drinks[0]["strIngredient" + i];
            strLiList += '</li>';
        }
    }

    recipeTitle.innerHTML = '<i aria-hidden="true" class="fa fa-fw fa-glass"></i> ' + data.drinks[0].strDrink;
    recipeImg.src = data.drinks[0].strDrinkThumb;
    recipeImg.alt = data.drinks[0].strDrink;
    recipeIngredients.innerHTML = strLiList;
    recipenstructions.innerHTML = data.drinks[0].strInstructions;
})
.catch((error) => {

});