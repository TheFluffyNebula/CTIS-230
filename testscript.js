myitem = document.getElementById("firsttest"); //stores the element with id "firsttest" in document as myitem
thebutton = document.getElementById("thebutton");  
thebutton2 = document.getElementById("thebutton2");
otheritem = document.getElementById("buttontest");
otheritem2 = document.getElementById("buttontest2");
textentry = document.getElementById("myinput");  

myitem.addEventListener("click", onClick); //sets up a listener where clicking myitem will trigger the function onClick
myitem.addEventListener("mouseout",normalMyItem);
thebutton.addEventListener("click", onButtonClick);
thebutton2.addEventListener("click",onButtonClick2);
textentry.addEventListener("change", onChange);

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

function onButtonClick2(){
    otheritem2.style.color = "lightgreen";
    otheritem2.fontSize = "0.8em"
}

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}