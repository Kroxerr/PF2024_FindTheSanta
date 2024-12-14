//Tenhle kód není optimální, ale funguje.
//Nejsem si jistý jakou černou magii jsem použil, ale JS funguje.
//Nehodlám se ho znovu dotknout nýbrž se bojím, že se rospadne a už ho nezprovozním


console.log("Hello, If you are reading this, this means it is working, well I hope it's working");

function playAnimation() {

    //Definuje constantu z definované ID pro změnu classky v css
    //Na tomhle jsem ztrávil až moc času, pls funguuuj!!!!!!
    const clicker = document.getElementById("clicker");
    const santaReveal = document.getElementById("santaReveal");
    const presentTop = document.getElementById("presentTop");

    //Odstraní class první animace a přepíše jí druhou
    //Jsem líný popsat zbytek kódu - budu toho později litovat
    santaReveal.classList.remove("santa-reveal");
    santaReveal.classList.add("santa-found")

    presentTop.classList.remove("present-top-reveal");
    presentTop.classList.add("present-top-found");

    var presentfall = document.getElementById("falling");
    if(presentfall.style.animationPlayState == "paused")
    {
        presentfall.style.animationPlayState = "running";
    }
    else
    {
        presentfall.style.animationPlayState = "running";
    }

    var wishAppear = document.getElementById("final");
    if(wishAppear.style.animationPlayState == "paused")
    {
        wishAppear.style.animationPlayState = "running";
    }
    else
    {
        setTimeout(() => {
            wishAppear.style.animationPlayState = "running";
        }, 50);
    }

    var wishAppear = document.getElementById("final");
    if (wishAppear.style.visibility === "unset")
    {
        wishAppear.style.visibility = "hidden";
    }
    else
    {
        wishAppear.style.visibility = "unset";
    } 

    var wishAppearTwo = document.getElementById("final-opacity");
    if(wishAppearTwo.style.animationPlayState == "paused")
        {
            wishAppearTwo.style.animationPlayState = "running";
        }
        else
        {
            setTimeout(() => {
                wishAppearTwo.style.animationPlayState = "running";
            }, 50);
        }


    //Vypne onclick aby nějaký inteligent neklikal na santu
    //jinak by měnil animace do nekonečna a vypadal divně
    clicker.onclick = null;

    //Potvrzení toho že se to spustilo dobře
    console.log("Santa is clicked and has been disabled");
}

// Button Click

function playButton() {

    var buttonTrigger = document.getElementById("disappear");
    if(buttonTrigger.style.animationPlayState == "paused")
    {
        buttonTrigger.style.animationPlayState = "running";
    }
         else
    {   
         buttonTrigger.style.animationPlayState = "running";
    }    
    
    if (buttonTrigger.style.visibility === "hidden")
    {
        buttonTrigger.style.visibility = "unset";
    }
    else
    {
        setTimeout(() => {
            buttonTrigger.style.visibility = "hidden";
        }, 300);
    }

    var svgPlay = document.getElementById("pf-move")
    if(svgPlay.style.animationPlayState == "paused")
    {
        svgPlay.style.animationPlayState = "running";
    }
    else
     { 
        setTimeout(() => {
            svgPlay.style.animationPlayState = "running";
        }, 500);
    }

    var svgPlayOpacity = document.getElementById("pf-illustration")
    if(svgPlayOpacity.style.animationPlayState == "paused")
    {
        svgPlayOpacity.style.animationPlayState = "running";
    }
    else
     {
        setTimeout(() => {
            svgPlayOpacity.style.animationPlayState = "running";
        }, 500);
    }
}
