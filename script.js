let buttonValues = {
    number: [0,1,2,3,4,5,6,7,8,9],
    operator: ['+','-','*','/'],
    point: ".",
    equal: "="
}

let buttons = document.querySelectorAll('button');
let userInput = [];
let value1 = null;
let value2 = null;
let operator = null;
let result = null;

getInputValue();

function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            console.log(processInputValue(this.id));
        });
    });
};

function processInputValue(inputValue){
    if(buttonValues.number.includes(parseInt(inputValue))){
        userInput.push(parseInt(inputValue));
        return userInput;
    }

    if(buttonValues.operator.includes(inputValue)){
        if(value1 == null && result == null){
            value1 = parseInt(userInput.join(''));
            userInput.length = 0;
            return operator = inputValue; 
        } else if (value1 == null & result != null){
            return operator = inputValue;
        };
    };

    if(inputValue == buttonValues.equal){
        value2 = parseInt(userInput.join(''));
        userInput.length = 0;
        switch(operator){
            case '+': addition(value1,value2)
            break;
            case '-': subtraction(value1,value2)
            break;
            case '*': multiplication(value1,value2)
            break;
            case '/': division(value1,value2)
            break;
        };
        value1 = null;
        return result;
    };

}

function addition(value1, value2){
    if (result != null){
        return result = result + value2;
    } else {
        return result = value1 + value2;
    };
}

function subtraction(value1, value2){
    if (result != null){
        return result = result - value2;
    } else {
        return result = value1 - value2;
    };
}

function multiplication(value1, value2){
    if (result != null){
        return result = result * value2;
    } else {
        return result = value1 * value2;
    };
}

function division(value1, value2){
    if (result != null){
        return result = result / value2;
    } else {
        return result = value1 / value2;
    };
}