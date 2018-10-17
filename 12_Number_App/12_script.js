//get the html element
var inputElement = document.querySelector('#number');
var resultElement = document.querySelector('#text-number');
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

//Event listener

inputElement.addEventListener('keyup',function () {
    var numberString = inputElement.value;
    resultElement.textContent = getStringNumber(numberString);
});

//Application logic

function getStringNumber(numberString) {
    var tempStr = '';
    for(var i = 0; i<numberString.length; i++){
        var index = parseInt(numberString.charAt(i));
        tempStr += numberArray[index]+ ' ' ;
    }
    return tempStr;
}