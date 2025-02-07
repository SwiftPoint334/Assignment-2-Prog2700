let previousKeys = [];
let currentKeys = [];
let operator = "";

document.getElementById('addition').addEventListener('click',
    function() {
        previousKeys = currentKeys;
        currentKeys = [];
        operator = "addition"
    }
);
document.getElementById('subtraction').addEventListener('click',
    function() {
        previousKeys = currentKeys;
        currentKeys = [];
        operator = "subtraction"
    }
);
document.getElementById('multiplication').addEventListener('click',
    function() {
        previousKeys = currentKeys;
        currentKeys = [];
        operator = "multiplication"
    }
);
document.getElementById('division').addEventListener('click',
    function() {
        previousKeys = currentKeys;
        currentKeys = [];
        operator = "division"
    }
);

function displayNumbers() {
    let flatCurrentKeys = currentKeys.flat();
    let currentNumber = parseInt(flatCurrentKeys.join(''));
    document.getElementById('calculator-screen').value = currentNumber;
}

document.getElementById('calculate').addEventListener('click',
    function() {
        let flatPreviousKeys = previousKeys.flat();
        let previousNumber = parseInt(flatPreviousKeys.join(''));

        let flatCurrentKeys = currentKeys.flat();
        let currentNumber = parseInt(flatCurrentKeys.join(''));

        if (operator === "addition") {
            let result = previousNumber + currentNumber;
            document.getElementById('calculator-screen').value = result;
        } else if (operator === "subtraction") {
            let result = previousNumber - currentNumber;
            document.getElementById('calculator-screen').value = result;
        } else if (operator === "multiplication") {
            let result = previousNumber * currentNumber
            document.getElementById('calculator-screen').value = result;
        } else if (operator === "division") {
            if (currentNumber === 0) {
                document.getElementById('calculator-screen').value = "Error"
                setTimeout(function() {
                    reset();
                }, 5000)
            } else {
                let result = previousNumber / currentNumber;
                document.getElementById('calculator-screen').value = result
            }
        }
    }
);
document.getElementById('btn1').addEventListener('click',
    function() {
        currentKeys.push(1);
        displayNumbers();
    }
);
document.getElementById('btn2').addEventListener('click',
    function() {
        currentKeys.push(2);
        displayNumbers();
    }
);
document.getElementById('btn3').addEventListener('click',
    function() {
        currentKeys.push(3);
        displayNumbers();
    }
);
document.getElementById('btn4').addEventListener('click',
    function() {
        currentKeys.push(4);
        displayNumbers();
    }
);
document.getElementById('btn5').addEventListener('click',
    function() {
        currentKeys.push(5);
        displayNumbers();
    }
);
document.getElementById('btn6').addEventListener('click',
    function() {
        currentKeys.push(6);
        displayNumbers();
    }
);
document.getElementById('btn7').addEventListener('click',
    function() {
        currentKeys.push(7);
        displayNumbers();
    }
);
document.getElementById('btn8').addEventListener('click',
    function() {
        currentKeys.push(8);
        displayNumbers();
    }
);
document.getElementById('btn9').addEventListener('click',
    function() {
        currentKeys.push(9);
        displayNumbers();
    }
);
document.getElementById('btn0').addEventListener('click',
    function() {
        currentKeys.push(0);
        displayNumbers();
    }
);
document.getElementById('clear').addEventListener('click',
    function() {
        reset();
    }
);

function reset() {
    currentKeys = [];
    previousKeys = [];
    operator = "";
    document.getElementById('calculator-screen').value = "";
}