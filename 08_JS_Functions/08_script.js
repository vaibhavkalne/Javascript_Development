//creation of a simple function with no args and execute a function
function greet() {
    console.log("i am from greet function");
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    console.log("hello "+name+ " , i am from greet function");
}
greetArgs("vaibhav");

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello "+name+ " you are "+age+ " yrs old");
}
greetLessArgs("Vaibhav");

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log("Hello "+name+ " you are " +age+ " yrs old");
}
greetMoreArgs("vaibhav",22,"Engineer");

//function overloading is not possible here
// functions with return values
function greetReturn(name) {
    var greetMsg = "hello " +name+ " Good Morning";
    return greetMsg
}
var greeting = greetReturn("vaibhav")
console.log(greeting);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greetMsg = "Hello "+name+ " Good Morning";
    //return
}
var greet1 = greetEmptyReturn("vaibhav");
console.log(greet1);

// function Expressions with name and execution
var a = 10;
var greetfn = function () {
    console.log("i'm from function expression");
}
greetfn();

// Functions as arguments without args
function greetFn1(name) {
    console.log(name+ " iam from greetfn 1 function ");
};
function greetFn2(name){
    console.log(name+" Iam from greetFn 2 function");
};
function greetEngine(Fname,name) {
    Fname(name);
};
greetEngine(greetFn1,"vaibhav");

// Function Expression
var greetFun1 = function (name) {
    console.log(name + " iam from greetfun 1 function");
};
var greetFun2 = function (name) {
    console.log(name+ " Iam from greetfun 2 function");
};
var greetEngine1 = function (fName,name) {
    fName(name);
};
greetEngine1(greetFun2,"vaibhav");

// Functions in Objects and Execution
var student = {
    firstName : "vaibhav",
    lastName : "kalne",
    fullName : function () {
            return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */

var employee = {
    name : "vaibhav",
    age : 22,
    desg : "Web Developer",
    address : {
        city : "Aurangabad",
        state : "Maharashtra",
        country : "India"
    },
    isFromCity : function (city) {
        return city.toUpperCase() === this.address.city.toUpperCase();
    },
    isFromState : function(state) {
        return state.toUpperCase() === this.address.state.toUpperCase();
    }
};

console.log('is From Awb ? ' + employee.isFromCity('aurangabad'));

console.log('is From MH ? ' + employee.isFromState('maharashtra'));

// Default Function Arguments (arguments)
function defaultArgs() {
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
defaultArgs('vaibhav',22,'Web Developer');





