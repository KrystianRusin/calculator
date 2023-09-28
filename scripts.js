let firstNumber;
let secondNumber;
let operator;

const addButton = document.getElementById("addBtn");
addButton.addEventListener('click', () => {
    operate(firstNumber, secondNumber, "+")
})

const numbers = document.querySelectorAll(".number-input")
numbers.forEach(number => number.addEventListener('click', (event) => {
    if(firstNumber){
        secondNumber = parseInt(event.target.id)
    } else {
        firstNumber = parseInt(event.target.id)
    }
}))

const operate = (a, b, operatation) => {
    if(operatation === "+"){
        add(firstNumber, secondNumber)
    }
    if(operatation === "-"){
        subtract(firstNumber, secondNumber)
    }
    if(operatation === "x"){
        multiply(firstNumber, secondNumber)
    }
    if(operatation === "/"){
        divide(firstNumber, secondNumber)
    }
}


const add = (a, b) => {
    
    return parseInt(a) + parseInt(b)
}

const subtract = (a,b) => {
    return a-b
}

const multiply = (a, b) => {
    return a*b
}

const divide = (a,b) => {
    return a/b
}