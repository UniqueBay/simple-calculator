// selecting dom elements

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");

// declaring variables

let displayNum1 = "";
let displayNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;


// adding event listeners to numbers

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        displayNum2 += e.target.innerText;
        display2.innerText = displayNum2;
        // console.log();
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!displayNum2) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (displayNum1 && displayNum2 && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displayNum2);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    });
});

function clearVar(name = "") {
    displayNum1 += displayNum2 + " " + name + " ";
    display1.innerText = displayNum1;
    display2.innerText = "";
    displayNum2 = "";
    tempResult.innerText = result;
}

function mathOperation() {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(displayNum2);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(displayNum2);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(displayNum2);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(displayNum2);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(displayNum2);
    }
}

// operation();

equals.addEventListener("click" , () => {
    if (!displayNum2 || !displayNum1) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    tempResult.innerText = "";
    displayNum2 = result;
    displayNum1 = "";
});

clearAll.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 ="";
    display1.innerText = "";
    display2.innerText = "";
    result = "";
    tempResult.innerText = "";
});

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "." 
    ) {
        clickButton(e,key);
        //console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key ==="/" || e.key === "%") {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("x");
        //console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    }
    //console.log(e.key)
});

function clickButton(key) {
    number.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}
function clickOperation(key) {
    operation.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
}
function clickEqual() {
    equals.click();
}