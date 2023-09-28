let firstNumber;
let secondNumber;
let operator;

const numbers = document.querySelectorAll(".number-input")
numbers.forEach(number => number.addEventListener('click', (event) => {
    if(operator){
        if(secondNumber){
            secondNumber += event.target.id
        }else {
            secondNumber = event.target.id
        }
    } else {
        if(firstNumber){
            firstNumber += event.target.id
        } else {
            firstNumber = event.target.id
        }
        
    }
}))

const operations = document.querySelectorAll(".operation-input")
operations.forEach(operation => operation.addEventListener('click', (event) => {
    operator = event.target.id
}))

const operate = (a, b, operatation) => {
    if(operatation === "+"){
        console.log(add(firstNumber, secondNumber))
    }
    if(operatation === "-"){
        console.log(subtract(firstNumber, secondNumber))
    }
    if(operatation === "X"){
        console.log(multiply(firstNumber, secondNumber))
    }
    if(operatation === "/"){
        console.log(divide(firstNumber, secondNumber))
    }
}


const add = (a, b) => {
    
    return parseInt(a) + parseInt(b)
}

const subtract = (a,b) => {
    return parseInt(a) - parseInt(b)
}

const multiply = (a, b) => {
    return parseInt(a)*parseInt(b)
}

const divide = (a,b) => {
    return parseInt(a)/parseInt(b)
}

const equals = document.getElementById("=");
equals.addEventListener('click', () => {
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(operator)
    operate(firstNumber, secondNumber, operator)
})