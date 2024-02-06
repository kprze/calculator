let firstVal;
let secondVal;
let operator;
let displayValue = [];

getInputValue();

function getInputValue(){
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            console.log(operate(this.id));
        });
    });
};

function operate(inputValue){

}

function add(firstVal, secondVal, operator){

}

function subtract(firstVal, secondVal, operator){

}

function multiply(firstVal, secondVal, operator){

}

function divide(firstVal, secondVal, operator){

}