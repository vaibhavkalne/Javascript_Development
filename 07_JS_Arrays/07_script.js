// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[2]);
console.log(array[4]);


// Access not existed property from an array
console.log(array[10]);

// adding properties to an array
array[5]= 60;
console.log(array);
array[7] =52;
console.log(array);


// Accessing length of an Array
var length = array.length;
console.log("The length is: " + length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log("Before: " + array);
array.reverse();
console.log("After: " + array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log("Before Shift: " + array);
array.shift();
console.log("After Shift: " + array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log("Before unshift: " + array);
array.unshift(100);
console.log("After Unshift: " + array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log("Before pop: " + array);
array.pop();
console.log("After pop: " + array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log("Before push: " + array);
array.push(100);
console.log("After push: "+array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):

//array.splice(index)
array = [10,20,30,40,50];
console.log("Before: "+array);
array.splice(1);
console.log("After: "+ array);

//array.splice(index,n)
array = [10,20,30,40,50];
console.log("Before: "+array);
array.splice(1,2);
console.log("After: "+array);

//array.splice(index,1,replace)
array = [10,20,30,40,50];
console.log("Before: "+array);
array.splice(0,1,100);
console.log("After: "+array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1  = ['HTML','CSS','Javascript','Bootstrap','Typescript'];
var array2 = array1; // both are pointing to same object
array1.splice(1);
console.log(array2);

array1 = ['HTML','CSS','JavaScript','Bootstrap'];
array2 = array1.slice();  // It creates a new copy of an array
array1.splice(1);
console.log(array2);

// indexOf()
array = ['HTML','CSS','Javascript','Bootstrap'];
console.log(array.indexOf('Bootstrap'));

array = ['HTML','CSS','Javascript','Bootstrap'];
var value = 'AngularJS';
if (array.indexOf(value) === -1){
    console.log("The value is not exist");
}
else {
    console.log("The value is exists @ index : " +array.indexOf(value));
}


// Join()
array = [10,20,30,40,50];
var str = array.join('-');
console.log(str);

// Prove an array is an Object
array = ['HTML','CSS','Javascript','Bootstrap'];
console.log(array);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
