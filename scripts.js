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

const operations = document.querySelectorAll(".operation-input")
operations.forEach(operation => operation.addEventListener('click', (event) => {
    if(operator && secondNumber){
        operate(firstNumber, secondNumber, operator)

    }
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
    if(operatation === "×"){
        result = multiply(firstNumber, secondNumber)
    }
    if(operatation === "/"){
        result = divide(firstNumber, secondNumber)
    }
    firstNumber = result
    secondNumber = null
  
}

const display = document.getElementById('display')
const printToDisplay = (userInput) => {
    // const div = document.createElement('div')
    // div.
    display.textContent += userInput
} 


const add = (a, b) => {
    
    return Math.round((parseFloat(a) + parseFloat(b)) * 100)/100
}

const subtract = (a,b) => {
    return Math.round((parseFloat(a) - parseFloat(b)) * 100)/100
}

const multiply = (a, b) => {
    return Math.round((parseFloat(a) * parseFloat(b)) * 100)/100
}

const divide = (a,b) => {
    return Math.round((parseFloat(a) / parseFloat(b)) * 100)/100
}

const equals = document.getElementById("=");
equals.addEventListener('click', () => {
    if(!operator || !secondNumber){
        alert("please enter a valid equation")
        return
    }
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