value1 = null;
value2 = null;
operator1 = null;
operator2 = null;
displayValue = null;
result = null;
point = false;

buttons = document.querySelectorAll('button');
display = document.getElementById('display');

document.addEventListener("keydown", (event) => {
    const button = document.querySelector(`button[value="${event.key}"]`);
    if (button){
        if(result == 'Haha! Dividing by 0?')
        {
            clear()
        } else {
            processInput(button);
        }
    }
});

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        if(result == 'Haha! Dividing by 0?')
        {
            clear()
        } else {
            processInput(button);
        }
    });
});

function processInput(userInput){
    if(userInput.className === 'operand'){
        processOperand(userInput.value)
    } else if(userInput.className === 'operator'){
        processOperator(userInput.value);
    } else if(userInput.className === 'equals'){
        processEquals();
    } else if (userInput.className === 'point'){
        if(point === false){processPoint(point)};
        point = true;
    } else if(userInput.className === 'clear'){
        clear();
    }
}

function updateDisplay(userInput){
    if(display.textContent)
    displayValue = userInput.toString();
    display.textContent = userInput;
}

function processOperator(userInput){
    if(operator1 === null){
        operator1 = userInput;
    } else if(operator2 === null){
        result = operate(value1, value2, operator1)
        operator2 = userInput;
        value1 = result;
        value2 = null;
        point = false;
        updateDisplay(result);
    } else if (operator2 != null && value2 != null){
        result = operate(value1, value2, operator2)
        operator2 = userInput;
        value1 = result;
        value2 = null;
        point = false;
        updateDisplay(result);        
    } else {
        operator2 = userInput;    
    }
}

function processOperand(userInput){
    if(operator1 === null && operator2 === null && result === null){
        if(value1 === null){
            value1 = userInput;
        } else if (value1.toString().length < 15){
            value1 += userInput;
        }
        updateDisplay(value1);   
    } else {
        if(value2 === null){
            value2 = userInput;
        } else if (value2.toString().length < 15){
            value2 += userInput;
        }
        updateDisplay(value2); 
    }
}

function processEquals(){
    if(operator1 === null){
        displayValue = displayValue;
    } else {
        if(operator2 != null){
            result = operate(value1, value2, operator2)
        } else {
            result = operate(value1, value2, operator1)
        }
    }
    if(result === null){
        updateDisplay(0)
    } else {
        updateDisplay(result);
    }
    value1 = result;
    value2 = null;
    operator1 = null;
    operator2 = null;
    point = false;
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

function clear(){
    value1 = null;
    value2 = null;
    operator1 = null;
    operator2 = null;
    displayValue = null;
    result = null;
    point = false;
    updateDisplay(0);
}

function processPoint(){
    if(operator1 === null && operator2 === null && result === null){
        if(value1 === null){
            value1 = 0 + '.';
        } else if(value1 != null && value1 === result){
            result = null;
            value1 = 0 + '.';
        } else {
            value1 += '.';
        }
        updateDisplay(value1);
    } else {
        if(value2 === null){
            value2 = 0 + '.';
        } else if(value2 != null){
            value2 += '.';
        }
        updateDisplay(value2); 
    }
}

function add(value1, value2){
    if((Math.abs(value1+value2).toString()).length > 15){
        return (value1+value2).toPrecision(10)
    } else {
        return value1 + value2;
    }
}

function subtract(value1, value2){
    if((Math.abs(value1-value2).toString()).length > 15){
        return (value1-value2).toPrecision(10)
    } else {
        return value1 - value2;
    }
}

function multiply(value1, value2){
    if((Math.abs(value1*value2).toString()).length > 15){
        return (value1*value2).toPrecision(10)
    } else {
        return value1 * value2;
    }
}

function divide(value1, value2){
    if(value1 === 0 || value2 === 0){
        return 'Haha! Dividing by 0?'
    } else if((Math.abs(value1/value2).toString()).length > 15){
        return (value1/value2).toPrecision(10)
    } else {
        return value1 / value2;
    }
}