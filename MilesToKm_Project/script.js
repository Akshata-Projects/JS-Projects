//iife
(function(){
    'use strict';
    document.getElementById('convert').addEventListener('submit', function(event){
            
        event.preventDefault(); // prevents the page to go the action file
        //let distance = document.querySelector('input').value; OR
        let distance = parseFloat(document.getElementById('distance').value);
        let result = document.getElementById('answer');
    
        if(distance){
            // convert and round the distance and put the answer in the bottom div using innerHtml
           /*  let conversion = distance * 1.609344;
            let roundedConversion = (Math.round(conversion * 1000))/1000; OR
            let roundedConversion = conversion.toFixed(3); */
            
            let conversion = (distance * 1.609344).toFixed(3)
            result.innerHTML = `<h2>${distance} miles converts into ${conversion} kilometer</h2>`
        }else{
            // display error
            answer.innerHTML = '<h2>Please Enter a number </h2>';
    
        }
     })



})();