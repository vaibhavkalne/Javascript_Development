// Create two variables and display their sum
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("The sum of "  + num1 + " & " + num2 + " is :" +sum);

// Find the biggest value between 2 numbers
var a = 60;
var b = 97;
if (a>b)
    {
        console.log(" The big value is: " + a);
    }
else {
    console.log("The big Value is:  " +b);
}

// Find the biggest value among 3 numbers

var x = 59;
var y = 96;
var z = 47;
if (x>y && x>z){
    console.log("the big value is: "+x);
}
else if(y>z) {
    console.log("The big value is: " + y);
}
else {
    console.log("the big value is: "+z);
}


//count the number of 'a' in given string

var str = "vaibhav";
function countA(str) {
    var count = 0;
    for(var i=0; i<str.length; i++)
    {
        if(str.charAt(i) === 'a')
        {
            count++;
        }
    }
    return count;
}
console.log("The count of a is : "+countA(str));


//reverse the string
function reverseString(str) {
    var tempStr = '';
    for (var i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log("The reverse String is:" +reverseString(str));

//palindrome program
function isPalindrom(str) {
    return str === reverseString(str);
}
var thestr = "ABCCBA";
console.log(thestr + " is palindrome ?" +isPalindrom(thestr));