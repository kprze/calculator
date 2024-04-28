let value1 = null;
let value2 = null;
let operator1 = null;
let operator2 = null;
let displayValue = null;
let result = null;

let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

getInputValue();

function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            if(this.className == 'operand'){
                // updateDisplay(this.value);
                processOperand(this.value)
            } else if(this.className == 'operator'){
                processOperator(this.value);
            } else if(this.className == 'equals'){
                processEquals(this.value);
            }
        });
    });
};

function updateDisplay(userInput){
    display.textContent = userInput;
}

function processOperator(userInput){
    if(operator1 == null){
        operator1 = userInput;
    } else if(operator2 == null){
        operator2 = userInput;
    }
}

function processOperand(userInput){
    if(operator1 == null && operator2 == null){
        if(value1 == null){
            value1 = userInput;
        } else if(value1 != null){
            value1 += userInput;
        }
        updateDisplay(value1);
    } else {
        if(value2 == null){
            value2 = userInput;
        } else if(value2 != null){
            value2 += userInput;
        }
        updateDisplay(value2); 
    }
}

function processEquals(userInput){

}

function operate(value1, value2, operator){

}

function add(value1, value2){
    return value1 + value2;
}

function subtract(value1, value2){
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    return value1 / value2;
}