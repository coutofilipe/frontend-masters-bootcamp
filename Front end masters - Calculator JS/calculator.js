let runningTotal = 0;
//keeps track of what is on screen
let buffer = '0';
let previousOperator = null;

//grabs the screen so that we can keep on writting/showing  (concatenating)
const screenSelector = document.querySelector('.screen');

function buttonClick(clickedValue) {
    if (isNaN(clickedValue)) {
        //this is not a number
        handleSymbol(clickedValue);
    } else {
        handleNumber(clickedValue);
    }
    //rerender after every click
    screenSelector.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                //since you need to numbers to do math you should not do anything!
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;

    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    //Keep track of the previous operator
    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    console.log('running total', runningTotal);

}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}




//Not a mandatory function just for clarity and to know where everyting in your code gets set up;
function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        })
}

init();