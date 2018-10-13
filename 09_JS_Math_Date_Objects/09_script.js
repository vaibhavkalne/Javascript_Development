/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log(piValue);

// Math sqrt
var sqrt = Math.sqrt(169);
console.log(sqrt);

// find the min of 4 numbers
var min = Math.min(50,56,9864,65,250,465,753,15,2,545);
console.log(min);

// find the Max of 4 numbers
var max = Math.max(86,854,84521,52,652,542,52,452);
console.log(max);

// find the 'x' to the power of 'y' value, ex: 2^4
var power = Math.pow(3,4);
console.log(power);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 100);
console.log(random);
document.querySelector('#display').textContent = random.toString();
/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = today.toLocaleDateString();
console.log(date);

// get full day of the week using switch statement
today = new Date().getDay();
output = 'today is: ';
switch (today){
    case 0:
        output += 'sunday';
        break;
    case 1:
        output += 'monday';
        break;
    case 2:
        output += 'tuesday';
        break;
    case 3:
        output += 'wednesday';
        break;
    case 4:
       output += 'thursday';
        break;
    case 5:
        output += 'friday';
        break;
    case 6:
        output += 'saturday';
        break;
    default:
        output += ' ';
        break;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Display a Digital Clock on the web page

//India clock
function indianClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    var date = today.toLocaleDateString('en-US',options);
    document.querySelector('#india-time').textContent = time;
    document.querySelector('#india-date').textContent = date;
}
setInterval(indianClock,1000);

//India clock
function chinaClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Shanghai'};
    var time = today.toLocaleTimeString('en-US',options);
    var date = today.toLocaleDateString('en-US',options);
    document.querySelector('#china-time').textContent = time;
    document.querySelector('#china-date').textContent = date;
}
setInterval(chinaClock,1000);

//usa clock
function usaClock() {
    var today = new Date();
    var options = {timeZone : 'America/New_York'};
    var time = today.toLocaleTimeString('en-US',options);
    var date = today.toLocaleDateString('en-US',options);
    document.querySelector('#us-time').textContent = time;
    document.querySelector('#us-date').textContent = date;
}
setInterval(usaClock,1000);
/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
var min = Number.MIN_VALUE;
console.log(min);

var max = Number.MAX_VALUE;
console.log(max);

var positiveInfinity = Number.POSITIVE_INFINITY;
console.log(positiveInfinity);

var negativeInfinity = Number.NEGATIVE_INFINITY;
console.log(negativeInfinity);

var str = '120';
var num =parseInt(str);
console.log('valur ' + num + ' type: ' +typeof num);

var newStr = num.toString();
console.log('value : ' + newStr + ' type : ' + typeof newStr);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var msg = "good morning";

console.log('Uppercase : ' + msg.toUpperCase());
console.log('lowercase : ' + msg.toLowerCase());

console.log('length : ' + msg.length);

// partial string
var partialStr = msg.substr(0,4); // Good
partialStr = msg.substr(5);
console.log(partialStr);

// char @ any index
var ch = msg.charAt(5);
console.log(ch);

// reverseString
str = "Good Morning";
function revString(str) {
    var temp = '';
    for(var i = str.length-1; i>=0 ; i--){
        var ch = str.charAt(i);
        temp += ch;
    }
    return temp;
}
console.log('Rev String : ' + revString(str));

// Palindrome
str = "ABCDCBA"
function palindrome(str) {
    return str === revString(str);
}

console.log('is Palindrome ? ' + palindrome(str));


// get the String number
var strNum = "01254";
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function getStringNum(strNum) {
    var tempStr = '';
    for(var i=0; i<strNum.length; i++){
        tempStr += numberArray[parseInt(strNum.charAt(i))] + " ";
    }
    return tempStr;
}
console.log(getStringNum(strNum));
