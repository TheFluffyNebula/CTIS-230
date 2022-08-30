// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1")

// make something happen when we click on them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

//document hides image whenever the user presses any key
document.addEventListener("keyup", hideBigImage);

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    bigimage.src ="../JStest/2_of_clubs.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}

function hideBigImage(){
    //just add the dontshow class back to the div, and the css rule for dontshow takes effect again
    mybigimage.classList.add("dontshow");
}