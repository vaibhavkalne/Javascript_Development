// Assignment operator =
var jsversion = "javascript";
console.log("Assignment operator: "+jsversion);


// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log("sum of "+a+ " and "+b+ " is "+sum );

// Short hand math += , -= , *= , /=
var x = 20;
var y = 30;
var add = 0;
var sub = 0;
add = add +(x+y);
add += x+y;
sub -= x-y;
console.log("The Addition of number is "+add);
console.log("The Addition of number is "+sub);

// Conditional operators < , > , <= , >= , !=
var age = 25;
if (age<18){
    console.log("you are minor");
}
else {
    console.log("you are major");
}

// Unary Operator ++ , -- (pre , post)
var i=10;
i = i+1;
i+=1;
i++;
console.log("value of i is: "+i);


// Logical operators AND , OR
var inRelation = true;
var parentAgreed = true;
if (inRelation && parentAgreed){
    console.log("Get marry soon");
}
else {
    console.log("wait untill parent agree")
}

// String Concatenation Operator
var str = 10+20+"30"+40+50;
console.log("str value is: "+str);

// Ternary operator (? :)
(age<18)?console.log("you are minor"):console.log("you are major");


// Type of operator
var abc;
abc=10;
abc='test';
abc=true;
abc=null;

console.log("value is "+abc+" type is "+typeof abc);


// == operator
var p=10;
var q="10";
if (p == q){
    console.log("both are equal");
}
else {
    console.log("both are not equal");
}



// === operator
v=10;
d="10";
if (p === q){
    console.log("both are equal");
}
else {
    console.log("both are not equal");
}
