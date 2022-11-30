// iife
(function(){
    "use strict";
    // let myImages = ['imgFolder/image1.jpg','imgFolder/image2.jpg','imgFolder/image3.jpg','imgFolder/image4.jpg','imgFolder/image5.jpg'];
    let myImages = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    let currentImage = 0;

    document.getElementById('next').onclick = nextPhoto;
    function nextPhoto(){
        currentImage++;
        if(currentImage > myImages.length-1){ currentImage = 0;}
        document.getElementById('myimage').src= myImages[currentImage];
        console.log(`The current image is ${currentImage}`);
    }

    document.getElementById('previous').onclick = prevPhoto;
    function prevPhoto(){
        currentImage--;
        if(currentImage < 0) { currentImage = myImages.length-1;}

        document.getElementById('myimage').src = myImages[currentImage];
        console.log(`The prev image is ${currentImage}`);
    }

})();