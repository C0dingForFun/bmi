let weight = document.querySelector('#Weight');
let height = document.querySelector('#Height');
let span = document.querySelector('#span');
let calc = document.querySelector('.answer');

calc.addEventListener('click', ()=>{
    span.innerText = parseFloat(eval(`${weight.value} / (${height.value/100})**2`)).toFixed(2);

    if (span.innerText <= 18.4){
        span.innerText = span.innerText + " - Underweight";
    }
    else if(span.innerText >= 18.5 && span.innerText <= 24.9 ) {
        span.innerText = span.innerText + " - Normal";
    }
    else if(span.innerText >= 25.0 && span.innerText <= 39.9 ) {
        span.innerText = span.innerText + " - Overweight";
    }
    else{
        span.innerText = span.innerText + " - Obese";
    }

})

