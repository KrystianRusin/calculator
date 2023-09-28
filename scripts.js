let firstNumber;
let secondNumber;
let operator;

const addButton = document.getElementById("addBtn");
addButton.addEventListener('click', () => {
    firstNumber = prompt("enter first number")
    secondNumber = prompt("enter second number")
    operate(firstNumber, secondNumber, "+")
})

const operate = (a, b, operatation) => {
    if(operatation === "+"){
        console.log(add(firstNumber, secondNumber))
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