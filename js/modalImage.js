
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var boxImg1 = document.querySelector(".card-box-home-1 > .box-pic img");
if(boxImg1){
    boxImg1.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.currentSrc || this.src;
        captionText.innerHTML = `<p><i aria-hidden="true" class="fa fa-fw fa-cutlery"></i> ${this.alt}</p>`;
    }
}

var boxImg2 = document.querySelector(".card-box-home-2 > .box-pic img");
if(boxImg2){
    boxImg2.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.currentSrc || this.src;
        captionText.innerHTML = `<p><i aria-hidden="true" class="fa fa fa-fw fa-glass"></i> ${this.alt}</p>`;
    }
}

var articleImg = document.querySelector(".article-pic img");
if(articleImg){
    articleImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.currentSrc || this.src;
        captionText.innerHTML = `<p>${this.alt}</p>`;
    }
}

var mealInfoImg = document.querySelector("#meal-info-pic img");
if(mealInfoImg){
    mealInfoImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.currentSrc || this.src;
        captionText.innerHTML = `<p><i aria-hidden="true" class="fa fa-fw fa-cutlery"></i> ${this.alt}</p>`;
    }
}

var drinkInfoImg = document.querySelector("#drink-info-pic img");
if(drinkInfoImg){
    drinkInfoImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.currentSrc || this.src;
        captionText.innerHTML = `<p><i aria-hidden="true" class="fa fa fa-fw fa-glass"></i> ${this.alt}</p>`;
    }
}

// Get the <p> element that closes the modal
var pclose = document.getElementsByClassName("close")[0];

// When the user clicks on <p> (x), close the modal
pclose.onclick = function() 
{
    modal.style.display = "none";

    // Check to see if the button is pressed
    const pressed = pclose.getAttribute("aria-pressed") === "true";

    // Change aria-pressed to the opposite state
    pclose.setAttribute("aria-pressed", !pressed);
}