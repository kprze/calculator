let firstVal;
let secondVal;
let operator;
let userInput = [];

let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');
console.log(display)

getInputValue();


function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            processInputValue(this.id);
            displayValue(userInput)
        });
    });
};

function displayValue(userInput){
    display.textContent = userInput.join('');
}

function processInputValue(inputValue){
    userInput.push(inputValue);
}

function operate(){
    
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