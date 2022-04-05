console.log("Hello, world!");


// TODO: second text on screen that shows user the firstOperator and the current Operation

let displayValue;
let firstOperator = null;
let secondOperator = null;
let currentOperation = null;
let resetScreen = false;

const display = document.querySelector('.currentDisplay');
const btns = document.querySelectorAll('.btn');
const clearbtn = document.querySelector('.clear-btn');
const deletebtn = document.querySelector('.delete-btn');
const pointbtn = document.querySelector('#point-btn');



clearbtn.addEventListener('click', () => {
    firstOperator = 0;
    secondOperator = 0;
    currentOperation = null;
    display.textContent = 0;
});

deletebtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent;
});

var regNum = /^\d+$/;
btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.textContent.match(regNum) && display.textContent.length < 11){
            if(resetScreen) {
                display.textContent = '';
                resetScreen = false;
            }
            display.textContent = parseFloat(display.textContent += btn.textContent);
            displayValue = parseFloat(display.textContent);
        };
        if(btn.textContent == '÷' || btn.textContent == '×' || btn.textContent == '+' || btn.textContent == '-'){
            
            if(currentOperation != null){
                secondOperator = parseFloat(display.textContent);
                console.log(secondOperator);
                if(currentOperation === '÷' && display.textContent === '0') display.textContent = 'lmao';
                else {
                    firstOperator = operate(firstOperator, secondOperator, currentOperation);
                
                
                    display.textContent = firstOperator;
                    resetScreen = true;
                    currentOperation = btn.textContent;
                }

            } 
            else{
                firstOperator = parseFloat(display.textContent);
                console.log(firstOperator);
                currentOperation = btn.textContent;
                resetScreen = true;
            }
        };
        if(btn.textContent == '.' && !(display.textContent.includes('.'))){
            display.textContent += btn.textContent;
            parseFloat(display.textContent);
        }

        if(btn.textContent == '='){
            if(currentOperation === '÷' && display.textContent === '0') display.textContent = 'lmao';

            else if(currentOperation != null){
                secondOperator = parseFloat(display.textContent);
                console.log(secondOperator);
                firstOperator = operate(firstOperator, secondOperator, currentOperation);
                console.log(firstOperator);
                display.textContent = firstOperator;
                resetScreen = true;
                currentOperation = null;
            } 

        }
    });
});




function add(a, b){
    return a+b;
};

function subtract(a, b){
    return a-b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return Math.round((a / b) * 10000) / 10000;
};

function operate(a, b, op){
    a = parseFloat(a);
    b = parseFloat(b);
    switch(op){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
           return b == 0 ? null : divide(a,b);
    }
};