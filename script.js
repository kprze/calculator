let firstVal;
let secondVal;
let operator;
let displayValue = [];

let buttons = document.querySelectorAll('button');

getInputValue();
add(firstVal,secondVal)

function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            console.log(operate(this.id));
        });
    });
};

function operate(inputValue){
    displayValue.push(inputValue)
    console.log(displayValue)
}

function display(){
    
}

function add(firstVal, secondVal){
    console.log(firstVal + secondVal)
    return firstVal + secondVal;
}

function subtract(firstVal, secondVal){
    console.log(firstVal - secondVal)
    return firstVal - secondVal;
}

function multiply(firstVal, secondVal){
    console.log(firstVal * secondVal)
    return firstVal * secondVal;
}

function divide(firstVal, secondVal){
    console.log(firstVal / secondVal)
    return firstVal / secondVal;
}