ourText = document.getElementById("newtext");
ourText.addEventListener("mouseover",onMouseOver); 
function onMouseOver(){
  ourText.style.color = "green";
  ourText.style.fontSize = "3em";
  ourText.innerHTML = "And we have changed the text.";
}
ourText.addEventListener("mouseout",onMouseOut);
function onMouseOut(){
  ourText.style.color = "black";
  ourText.style.fontSize = "1em";
  ourText.innerHTML = "<strong>And we changed it back</strong>";
}



myBlue = document.getElementById("TWPblue");
ourbutton = document.getElementById("mybutton");
ourbutton.addEventListener("click",onClick);
function onClick(){
    ourText.innerHTML = "I clicked the button";
    ourText.style.fontSize="2em";
    myBlue.style.display="block"; //change from None to block to make it appear
}


ourInput = document.getElementById("myinput"); //this contains the new text
ourHeading = documen.getElementById("header"); //what we're going to modify
ourInput.addEventListener("change", changeText); //the text in the field changes
ourInput.addEventListener("blur", changeText); //the text field loses focus
function changeText(){
  //Get the text that the user entered
  newtext = ourInput.value; //we ask ourInput for its value, which is the entered text
  ourHeading.innerHTML = newtext;
}

blueImage = document.getElementById("blue");
blueImage.addEventListener("click",changeImage);
function changeImage(){
  blueImage.style.position("absolute");//make the position of the div absolute and 100px from top left corner
  blueImage.style.top="100px";
  blueImage.style.left="100px";
  myBlueImage.style.width="80px";//make the width of the image 80px
  //not the width of the div bc it won't affect how wide the image is
  myBlueImage.src="Bunny_Sleeping.png";

}