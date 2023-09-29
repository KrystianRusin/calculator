let firstNumber;
let secondNumber;
let operator;
let result;

const numbers = document.querySelectorAll(".number-input")
numbers.forEach(number => number.addEventListener('click', (event) => {
    if(!operator){
        if(firstNumber){
            firstNumber += event.target.id
            printToDisplay(event.target.id)
        } else {
            firstNumber = event.target.id
            printToDisplay(event.target.id)
        }
    } else {
        if(secondNumber){
            secondNumber += event.target.id
            printToDisplay(event.target.id)
        }else {
            secondNumber = event.target.id
            printToDisplay(event.target.id)
        }
    }

}))

//Need to find a way to calculate current answer of two numbers between an operator every time the second number is edited
//Number must be recalculated using the input first number and newly edited second number
//Result is then stored after an operator is pressed

const operations = document.querySelectorAll(".operation-input")
operations.forEach(operation => operation.addEventListener('click', (event) => {
    if(operator && secondNumber){
        operate(firstNumber, secondNumber, operator)

    }
    operator = event.target.id
    printToDisplay(operator)
}))

const operate = (a, b, operatation) => {
    console.log("first: " + firstNumber)
    console.log("second:" + secondNumber)
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
    firstNumber = result
    secondNumber = null
    console.log("result " + result)
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
    firstNumber = result;
    secondNumber = null;
    operator = null;
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    display.textContent = ""
})