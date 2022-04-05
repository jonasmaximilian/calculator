console.log("Hello, world!");
let displayValue;
let firstOperator = 0;
let secondOperator = 0;
let currentOperation;

const display = document.querySelector('.currentDisplay');
const btns = document.querySelectorAll('.btn');
const clearbtn = document.querySelector('.clear-btn');
const deletebtn = document.querySelector('.delete-btn');

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
            display.textContent = parseInt(display.textContent += btn.textContent);
            displayValue = parseInt(display.textContent);
        };
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
    a = parseInt(a);
    b = parseInt(b);
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