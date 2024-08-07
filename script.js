const toCelcius = document.getElementById('toCelcius');
const toFahrenheit = document.getElementById('toFahrenheit');
const temperature = document.getElementById('unit');
const result = document.getElementById('result');

let temp;
let celcius;
let fahrenheit;
const convert = () =>{
    if(temperature.value === ''){
        result.style.color = 'red'

        result.textContent = 'please write a value';
    }
    
    else if(toCelcius.checked){
        temp = Number(temperature.value);
        celcius = 5/9 * (temp - 32) .toFixed() + 'C';
        result.textContent = celcius;
    }
    else if(toFahrenheit.checked){
        temp = Number(temperature.value);
        fahrenheit = (9/5 * temp) - 32 .toFixed() + 'F';
        result.textContent = fahrenheit;
    }
    else{
        result.textContent = 'write an option';
    }
    
}