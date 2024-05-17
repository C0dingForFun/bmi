let weight = document.querySelector('#Weight');
let height = document.querySelector('#Height');
let span = document.querySelector('#span');
let calc = document.querySelector('.answer');

calc.addEventListener('click', ()=>{
    span.innerText = parseFloat(eval(`${weight.value} / (${height.value/100})**2`)).toFixed(2);
})

