//BOM Operations
// width of the browser
var width = window.innerWidth;
console.log(width);

// Open a new Tab
//window.open('http://www.github.com/vaibhavkalne');

// print method
//window.print();

// DOM Properties to get body , title , URL
var bodyElement = document.body;
console.log(bodyElement);

var titleElement = document.title;
console.log(titleElement);

var url = document.URL;
console.log(url);

//DOM Manipulation

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor = 'purple';
h2Element.style.color = 'white';
h2Element.style.boxShadow = '0 0 15px black';
h2Element.textContent = 'DOM MANIPULATION EX';

var h1Element = document.querySelector('#display');
h1Element.textContent = reverseString('VAibhAV KALne');
h1Element.style.color = 'white';
h1Element.style.textShadow = '2px 3px black';

function  reverseString(str) {
    var tempStr = '';
    for (var i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}


// Event Handling
var inputElement = document.querySelector('#user');
var userText = document.querySelector('#user-text');
function getUser() {
    var username = inputElement.value;
    displayUser(username);
}

// displayUser
function displayUser(username) {
    if(username === 'vaibhav'){
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.style.borderColor = 'green';
        inputElement.style.boxShadow = '0 0 15px green';
        userText.textContent = 'Valid UserName';
        userText.style.color = 'green';
    }
    else{
        inputElement.style.backgroundColor = 'lightsalmon';
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 15px red';
        userText.textContent = 'Invalid UserName';
        userText.style.color = 'red';
    }
}

// JacScript Event Listeners
// Get the Element
var buttonElement = document.querySelector('#button');

// Apply the Click event
buttonElement.addEventListener('click',function() {
    var username = inputElement.value;
    displayUser(username);
});

// Event Listener for Input Element
inputElement = document.querySelector('#user');
inputElement.addEventListener('keyup',function() {
    var username = inputElement.value;
    displayUser(username);
});
