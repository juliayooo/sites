
let counter = 1;
console.log("script2.js loaded");

// document.addEventListener("DOMContentLoaded", function() {
//     switchImage();
//     setInterval(switchImage, 3000);
// });

function switchImage(){
    if(counter > 3){
        counter = 1;
        
    }
    console.log("inside changeImage", counter);
    for(var i = 1; i <= 3; i++){
    var image = "#performance" + i;
    document.querySelector(image).style.visibility = "hidden";

    }
    var currImage = "#performance" + counter;
    document.querySelector(currImage).style.visibility = "visible";
    counter++;
};
