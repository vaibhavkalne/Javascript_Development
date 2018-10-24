//Get the html element
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButtonElement = document.querySelector('#operator');
var equalsButtonElement = document.querySelector('#equals-button');
var resultButtonElement = document.querySelector('#result-button');
var plusButtonElement = document.querySelector('#plus-button');
var minusButtonElement = document.querySelector('#minus-button');
var divButtonElement = document.querySelector('#divide-button');
var mulButtonElement = document.querySelector('#multiply-button');
var clearButtonElement = document.querySelector('#clear-button');

var symbol = '';
//click event for minus button
minusButtonElement.addEventListener('click',function () {
    symbol = minusButtonElement.textContent.trim();
    operatorButtonElement.textContent = symbol;
});

//click event for plus button
plusButtonElement.addEventListener('click',function () {
    symbol = plusButtonElement.textContent.trim();
    operatorButtonElement.textContent = symbol;
});


//click event for division button
divButtonElement.addEventListener('click',function () {
    symbol = divButtonElement.textContent.trim();
    operatorButtonElement.textContent = symbol;
});


//click event for multiply button
mulButtonElement.addEventListener('click',function () {
    symbol = mulButtonElement.textContent.trim();
    operatorButtonElement.textContent = symbol;
});


//click event for equals button

equalsButtonElement.addEventListener('click',function () {
    var firstNumber = firstNumberElement.value;
    var secondNumber = secondNumberElement.value;
    var operator = operatorButtonElement.textContent.trim();
    if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseInt(firstNumber);
        var num2 = parseInt(secondNumber);
        var result = 0;
        switch (operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButtonElement.textContent = result;
    }
    else {
        resultButtonElement.textContent = 'RESULT';
    }
});

//click event for clear button
clearButtonElement.addEventListener('click',function () {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButtonElement.textContent = '+';
    resultButtonElement.textContent = 'RESULT';
});






