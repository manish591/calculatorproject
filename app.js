const previousInputField = document.querySelector('.previousinputfield');
const currentInputField = document.querySelector('.currentinputfield');
const numbersButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const deleteLastItem = document.querySelector('.deletelastentry');
const resetButton = document.querySelector('.reset');
const equalButton = document.querySelector('.equalbutton');


let currentNumberValue = '';
let previousNumberValue;
let whichOperator = '';

function updateNumberInView(e) {
    currentNumberValue += `${e.target.innerText}`;
    currentInputField.innerText = currentNumberValue;
}

numbersButton.forEach(button => {
    button.addEventListener('click', updateNumberInView);
})

operatorButton.forEach(operator => {
    operator.addEventListener('click', () => {
        if(currentNumberValue === '') {
            return console.log('please input')
        }
        previousNumberValue = currentNumberValue;
        currentNumberValue = '';
        previousInputField.innerText = previousNumberValue;
        currentInputField.innerText = currentNumberValue;
        whichOperator = operator.innerText;
    })
})


function calculate() {
    let firstValue = Number(previousNumberValue);
    let secondValue = Number(currentNumberValue);
    let calculation;

    switch(whichOperator){
        case '+':
            calculation = firstValue + secondValue;
            break;
        case '-':
            calculation = firstValue - secondValue;
            break;
        case '×':
            calculation = firstValue * secondValue;
            break;
        case '/':
            calculation = firstValue / secondValue;
            break;            
        default:
            return    
    }  
    previousNumberValue = '';
    previousInputField.innerText = previousNumberValue;
    currentInputField.innerText = calculation;
    whichOperator = undefined;
}

equalButton.addEventListener('click', calculate);

function allClear() {

}

function deleteLastNumber() {

}