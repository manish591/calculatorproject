const previousInputField = document.querySelector('.previousinputfield');
const currentInputField = document.querySelector('.currentinputfield');
const numbersButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const deleteLastItem = document.querySelector('.deletelastentry');
const resetButton = document.querySelector('.reset');
const equalButton = document.querySelector('.equalbutton');


let currentNumberValue = '';
let previousNumberValue;

function updateNumberInView(e) {
    currentNumberValue += `${e.target.innerText}`;
    currentInputField.innerText = currentNumberValue;
}

numbersButton.forEach(button => {
    button.addEventListener('click', updateNumberInView);
})

operatorButton.forEach(operator => {
    operator.addEventListener('click', () => {
        previousNumberValue = currentNumberValue;
        currentNumberValue = '';
        previousInputField.innerText = previousNumberValue;
        currentInputField.innerText = currentNumberValue;
    })
})

function calculate() {

}

function allClear() {

}

function deleteLastNumber() {

}