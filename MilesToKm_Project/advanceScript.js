//iife
(function(){
    'use strict';

    let convertType = "miles";
        let heading = document.querySelector('h1');
        let intro = document.querySelector('p');
        let answerDiv = document.getElementById('answer');
        let form = document.getElementById('convert');

        // Event Listener
        document.addEventListener('keydown',function(event){
            let key = event.code;
            
            if(key === 'KeyK'){
                // change heading , and intro para, value of the convert type variable
                convertType = 'kilometers';
                heading.innerHTML = "Kilometers to Miles Converter";
                intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
            } else if(key === 'KeyM'){
                convertType = 'Miles';
                heading.innerHTML = "Miles to Kilometer Converter";
                intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
            }
            
        });

        form.addEventListener('submit', function(){
            event.preventDefault();
            let distance = parseFloat(document.getElementById('distance').value);

            // if its a number
            if(distance){
                // To convert M to K - 1.609344
                // To convert K to M - 0.621371192
                if(convertType == "miles"){
                    let converted = (distance * 1.609344).toFixed(3);
                    answer.innerHTML = `${distance} kilometers converts to ${converted} Kilometers`;
                } else {
                    let converted = (distance * 0.621371192).toFixed(3);
                    answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
                }

            } else {
                answer.innerHTML = '<h2>Please enter a number';
            }
        });



})();