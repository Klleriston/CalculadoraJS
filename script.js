let display = document.getElementById('display')
let currentValue = '';

function appendNumber(number){
    currentValue += number;
    display.value = currentValue;
}
function appendOperator(operador){
    currentValue += operador;
    display.value = currentValue;
}
function clearDisplay() {
    currentValue += '';
    display.value = '';
}
function calculo() {
    try {
        const result = eval(currentValue);
            currentValue = result
            display.value = result
    } catch (erro) {
        display.value = 'Erro'
    }
}
