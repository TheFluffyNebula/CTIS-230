//Step 0: What do we want to do? Change the color and the size and the content of the text
//when the user moves over it and change it back when the user moves off of the text
//Step 1: Get the element that we want to affect and
//store it away so that we're ready to respond to the event
ourText = document.getElementById("newtext");
//This code asks the douument for the element that has 
//id newtext and stores the response in something named ourtext

//Step 2: We want to tell ourText to change when the
//mouse moves over it, so we attach an event listener to ourText called onMouseOver
ourText.addEventListener("mouseover",onMouseOver); //Type of action, function name
//Here's our event listener
function onMouseOver(){
  ourText.style.color = "green";
  ourText.style.fontSize = "3em";
  ourText.style.innerHTML = "And we have changed the text.";
}
// Need another event listener to respond to the mouse moving off
ourText.addEventListener("mouseout",onMouseOut);
function onMouseOut(){
  ourText.style.color = "black";
  ourText.style.fontSize = "1em";
  ourText.style.innerHTML = "<strong>And we changed it back</strong>";
}