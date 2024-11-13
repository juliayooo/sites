
let counter = 1;
console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    changeImage();
    setInterval(changeImage, 3000);
});

function changeImage(){
    if(counter > 4){
        counter = 1;
        
    }
    console.log("inside changeImage", counter);
    let bgImage = "url(home" + counter + ".jpg)";
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundImage.height = "100vh;";
    counter++;
};
