//create an objects in javascript
var employee={};

//add properties to an object
    employee.name = "David";
    employee.age = 30;
    employee.designation = 'Manager';

//access an object
console.log(employee);

//Access the properties of an object
console.log("Name: " +employee.name);

// Usage of Dot and [] notations
console.log("Designation: " +employee.designation);
console.log("Designation: " +employee['designation']);

// Create object literal
var mobile ={
    brand : 'Realme',
    color : 'Black',
    processor : 'Snapdragon 660',
    camera : '16MP',
    hasInsurance : false
};

//access the object
console.log(mobile);

//Create a nested object
var student = {
    name : 'VAibhAV',
    age : 22,
    course : 'Enginnering',
    address : {
        city : 'Aurangabad',
        state : 'Maharshtra',
        country : 'India'
    }
};

// Access the nested object
console.log(student.address);

//Add property to nested object
student.address.street = 'Baijipura';
console.log(student.address);

//Access the nested object properties using mix dot , []
console.log(student.address.street); //Baijipura
console.log(student.address['street']); //Baijipura

//=== operator for objects

var obj1 = {
    name : 'watson',
    age : 35
};
var obj2 = obj1;
if (obj1 === obj2){
    console.log('both are equal');
}
else {
    console.log('both are not equal')
}