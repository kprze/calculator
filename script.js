value1 = null;
value2 = null;
operator1 = null;
operator2 = null;
displayValue = null;
result = null;

buttons = document.querySelectorAll('button');
display = document.getElementById('display');

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
                processEquals();
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

function processEquals(){
    if(operator1 == null){
        displayValue = displayValue;
    } else if(operator2 != null){
        result = operate(value1, value2, operator2)
        value1 = result;
        value2 = null;
        operator1 = null;
        operator2 = null;
    } else {
        result = operate(value1, value2, operator1)
        value1 = result;
        value2 = null;
        operator1 = null;
        operator2 = null;
    }
    updateDisplay(result);
}

function operate(value1, value2, operator){
    value1 = Number(value1)
    value2 = Number(value2)
    switch(operator){
        case "+": return add(value1,value2)
        case "-": return subtract(value1,value2)
        case "*": return multiply(value1,value2)
        case "/": return divide(value1,value2)
    }
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