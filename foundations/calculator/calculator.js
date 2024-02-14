const add = function(num1, num2){
    return num1 + num2
}
const subtract = function(num1, num2){
    return num1 - num2
}
const multiply = function(num1, num2){
    return num1 * num2
}
const divide = function(num1, num2){
    return num1 / num2
}

const operate = function(num2, operationObj){
    let num1 = operationObj['number'];
    let operator = operationObj['operationStr']
    if (num2 == 'ERROR: Divided by Zero') {return num2} // propogate error through reduce
    switch(operator){
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            if (num2 == 0) {return 'ERROR: Divided by Zero'} //call error is div by 0
            return divide(num1, num2)
    }
}

//Importing buttons
const operatorBtns = document.querySelectorAll('.nonequals');
const numberBtns = document.querySelectorAll('.number');

const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('.equals');

const display = document.querySelector('.display');

//Display Value Updating
const updateDisplayValue = function(display, newValue){
    display.innerHTML += newValue;
}

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        updateDisplayValue(display, btn.id)});
})

numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        updateDisplayValue(display, btn.id)});
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = ''
})

//Calc Solving:

const validSyntax = function(operateStr){
    validCheck = true
    if (operateStr.match(/['+-/*']{2,}/g) != null) {return false}; //two operators next to each other
    if ('+-/*'.includes(operateStr.slice(-1))) {return false}; //check if operator at end of str
    if (operateStr.match(/['+-/*']/g) == null) {return false} //make sure there is one operatir
    return true
}

equalBtn.addEventListener('click', () => {
    let operatestr = display.innerHTML;
    if (validSyntax(operatestr) == false){
        display.innerHTML = 'ERROR: syntax invalid. Use Clear to return.';
        return
    };
    //extracting array of nums and operators. They are reversed so used numbers are iterated through in the right by reduce later
    const numArrayRaw = operatestr.match(/\d+/g).reverse();
    const numArray = numArrayRaw.map((x) => Number(x));
    var initialValue = numArray.shift(); //this'll be the initial value for a reduce later
    const operatorArray = operatestr.match(/['+-/*']/g).reverse();
    // a reduce will be taking each operation number pair from this in so we need both bits of data in one array entry
    const operations = [];
    for (let i = 0; i < operatorArray.length; i++){
        operations.push(Object.fromEntries([['operationStr', operatorArray[i]],['number', numArray[i]]]))
    }

    var answer = operations.reduce(operate, initialValue); //TODO: Round this to 5 decimals
    display.innerHTML = answer;
})
    




