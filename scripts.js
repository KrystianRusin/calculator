let firstNumber;
let secondNumber;
let operator;
let result;

const numbers = document.querySelectorAll(".number-input")
numbers.forEach(number => number.addEventListener('click', (event) => {
    if(operator){
        if(secondNumber){
            secondNumber += event.target.id
            printToDisplay(event.target.id)
        }else {
            secondNumber = event.target.id
            printToDisplay(event.target.id)
        }
    } else {
        if(firstNumber){
            firstNumber += event.target.id
            printToDisplay(event.target.id)
        } else {
            firstNumber = event.target.id
            printToDisplay(event.target.id)
        }
        
    }
}))

const operations = document.querySelectorAll(".operation-input")
operations.forEach(operation => operation.addEventListener('click', (event) => {
    operator = event.target.id
    printToDisplay(operator)
}))

const operate = (a, b, operatation) => {
    if(operatation === "+"){
        result = add(firstNumber, secondNumber)
    }
    if(operatation === "-"){
        result = subtract(firstNumber, secondNumber)
    }
    if(operatation === "X"){
        result = multiply(firstNumber, secondNumber)
    }
    if(operatation === "/"){
        result = divide(firstNumber, secondNumber)
    }
}

const display = document.getElementById('display')
const printToDisplay = (userInput) => {
    // const div = document.createElement('div')
    // div.
    display.textContent += userInput
} 


const add = (a, b) => {
    
    return parseFloat(a) + parseFloat(b)
}

const subtract = (a,b) => {
    return parseFloat(a) - parseFloat(b)
}

const multiply = (a, b) => {
    return parseFloat(a)*parseFloat(b)
}

const divide = (a,b) => {
    return parseFloat(a)/parseFloat(b)
}

const equals = document.getElementById("=");
equals.addEventListener('click', () => {
    operate(firstNumber, secondNumber, operator)
    printToDisplay(" = " + result)
    firstNumber = null;
    secondNumber = null;
    result = firstNumber
    operator = null;
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    display.textContent = ""
})