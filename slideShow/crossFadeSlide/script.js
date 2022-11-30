// iife
(function(){
"use strict";

let currentImage = 0;
let myPhotos = ['./images/image1.jpg','./images/image2.jpg','./images/image3.jpg','./images/image4.jpg','./images/image5.jpg'];

let container = document.getElementById('content');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');

function swapImg(){
let newImg = document.createElement('img');
newImg.src=`./${myPhotos[currentImage]}`;
newImg.className = 'fadeinimg';
container.appendChild(newImg);

// Remove Extra children to keep DOM clean
if(container.children.length > 2){
    container.removeChild(container.children[0]); // removes the bottom most child
}  
}

nextBtn.addEventListener('click',function(event){
event.preventDefault();

currentImage++;
if(currentImage > myPhotos.length-1){
    currentImage = 0;
}
swapImg();
});

prevBtn.addEventListener('click', function(event){
event.preventDefault();

currentImage--;
if(currentImage < 0){
    currentImage = myPhotos.length-1
}
swapImg();
});



})();





