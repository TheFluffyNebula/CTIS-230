mybigimage = document.getElementById("largeview");
ScaredBunny = document.getElementById("ScaredBunny");

ScaredBunny.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    // now is when we load the big image from the server
    bigimage.src ="C230images/Yess.jpg";
    // make this new element a child of the div for the big image
    mybigimage.appendChild(bigimage);
    // remove the dontshow class so that the div element is displayed
    mybigimage.classList.remove("dontshow");
}

function hideBigImage() {
    // Just add the dontshow class back to that div, and the CSS rule for dontshow takes effect again
    mybigimage.classList.add("dontshow");
}