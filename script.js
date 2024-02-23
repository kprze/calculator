let firstVal = null;
let secondVal = null;
let firstOp = null;
let secondOp = null;
let displayValue = null;
let operators = ['+', '-', '*', '/'];

let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

getInputValue();


function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            if(this.id === 'operand'){
                updateDisplay(this.value)
            } else if(this.id === 'operator'){

            }
        });
    });
};

function updateDisplay(userInput){
    if(displayValue == null){
        displayValue = userInput
    } else {
        displayValue = displayValue + userInput
    }
    display.textContent = displayValue;
}

function processInputValue(inputValue){

}

function operate(firstVal, secondVal, currOperator){
    switch(currOperator){
        case '+': add(firstVal, secondVal)
        break;
        case '-': subtract(firstVal, secondVal)
        break;
        case '*': multiply(firstVal, secondVal)
        break;
        case '/': divide(firstVal, secondVal)
        break;
    }
}

function add(firstVal, secondVal){
    return firstVal + secondVal;
}

function subtract(firstVal, secondVal){
    return firstVal - secondVal;
}

function multiply(firstVal, secondVal){
    return firstVal * secondVal;
}

function divide(firstVal, secondVal){
    return firstVal / secondVal;
}