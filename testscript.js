myitem = document.getElementById("firsttest"); //stores the element with id "firsttest" in document as myitem
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

myitem.addEventListener("click", onClick); //sets up a listener where clicking myitem will trigger the function onClick
myitem.addEventListener("mouseout",normalMyItem);
thebutton.addEventListener("click", onButtonClick);

function onClick() {  //changes myitem's text to lightgreen
    myitem.style.color = "lightgreen";  
    myitem.style.fontSize = "1.1em"
}

function normalMyItem(){
    myitem.style.color = "gold";
    myitem.style.fontSize = "1em";
}

function onButtonClick(){
    otheritem.style.color = "red";  
}