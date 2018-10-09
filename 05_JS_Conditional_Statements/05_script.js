// If Else condition Example
var courseComplited = true;
var practiceComplited = true;
if (courseComplited && practiceComplited){
    console.log("you will get the job soon")
}
else if (courseComplited && !practiceComplited){
    console.log("please start practicing");
}
else{
    console.log("please join course")
}

// For loop Example to display from 1 - 10 values
var output = '';
for (var i= 1; i<=10; i++){
    if(i<=9){
        output += i + ","
    }
    else {
        output += i;
    }
}

console.log(output);
document.querySelector("#display").textContent = output;


// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while (i<=10){
    if(i<=9){
        output += i + "-";
    }
    else {
        output += i;
    }
    i++;
}
console.log(output);
document.querySelector("#display").textContent = output;

// Do while loop Example to display from 1 - 10 values
output='';
i=1;
do{
    if(i<=9){
        output += i + "^";
    }
    else {
        output += i;
    }
    i++;
}
while (i<=10);
console.log(output);
document.querySelector("#display").textContent = output;


// Switch Statement Example

var today = new Date().getDay();
output = "today is: ";
switch(today){
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


//print the numberstring

var numberString = "143";
var tempString = '';
for(var i = 0; i<numberString.length; i++){
    var ch = parseInt(numberString.charAt(i));
    switch(ch){
        case 0:
            tempString += ' ZERO ';
            break;
        case 1:
            tempString += ' ONE ';
            break;
        case 2:
            tempString += ' TWO ';
            break;
        case 3:
            tempString += ' THREE ';
            break;
        case 4:
            tempString += ' FOUR ';
            break;
        case 5:
            tempString += ' FIVE ';
            break;
        case 6:
            tempString += ' SIX ';
            break;
        case 7:
            tempString += ' SEVEN ';
            break;
        case 8:
            tempString += ' EIGHT ';
            break;
        case 9:
            tempString += ' NINE ';
            break;
        default:
            tempString += ' ';
            break;
    }
}
console.log(tempString);
document.querySelector('#display').textContent = tempString;

