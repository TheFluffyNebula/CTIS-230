// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");

//make something happen when we click them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click",hideBigImage);

function makebigImage(){
    //first be sure that the largeview element has no leftover html
    mybigimage.innerHTML = '';
    //and an img element as a child of this largeview element
    bigimage = document.create("img");
    bigimage.src = "../JStest/2_of_clubs.png";
    mybigimage.appendChild(bigimage);
    mybigimage.remove("dontshow");
}