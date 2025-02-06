let firstTimeOpen = true;

function myNavFunction() 
{
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";

        let barsSpan = document.querySelector(".topnav.responsive .fa-sr-only");
        barsSpan.innerText = "Close the menu list";

        firstTimeOpen = false;
    } else {
        x.className = "topnav";

        if(!firstTimeOpen){
            let barsSpan = document.querySelector(".topnav .fa-sr-only");
            barsSpan.innerText = "Open the menu list";
        }

        firstTimeOpen = false;
    }
}