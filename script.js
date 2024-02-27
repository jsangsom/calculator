const keys = document.querySelectorAll('.key');

let lastValue = "";
let currentValue = "";
let operator = "";

function setDisplay(value) {
    document.getElementById("display").innerHTML = value;
}

function clearDisplay() {
    lastValue = "";
    currentValue = "";
    setDisplay("0");
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {

    if (op == "+") {
        return add(Number(num1), Number(num2));
    }
    else if (op == "-") {
        return subtract(Number(num1), Number(num2));
    }
    else if (op == "*") {
        return multiply(Number(num1), Number(num2));
    }
    else {
        return divide(Number(num1), Number(num2));
    }
}

keys.forEach(key => {
    key.addEventListener('click', function() {

        if (this.className == "key clear") {
            clearDisplay();
        }

        else if (this.className == "key digit") {
            if (currentValue || this.textContent != "0") {
                if (currentValue.length < 9) { 
                    currentValue += this.textContent;
                    setDisplay(currentValue);
                }
            }
        }

        else if (this.className == "key operator" && currentValue) {
            if (lastValue) {
                total = operate(lastValue, operator, currentValue);
                setDisplay(total);
                lastValue = total;
            } else {
                lastValue = currentValue;
            }

            currentValue = "";
            operator = this.textContent;
        }

        else if (this.className == "key equal") {
            if (lastValue) {
                total = operate(lastValue, operator, currentValue);
                setDisplay(total)
                currentValue = total;
                lastValue = "";
            }
        }
    })
});
