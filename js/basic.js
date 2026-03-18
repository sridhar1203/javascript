//print on javascript
console.log("amar");

// var, let, const
// redeclaration 
// reassignment
// block scope

// explian the var, let, const with example and issues with 
// possible redeclaration, reassignment and block scope
var a = 10;
console.log(a);
var a = 20;
console.log(a);
var a = 30;
console.log(a);

function test() {
    var a = 40;
    console.log(a);
} 
test();
console.log(a);

//----------------------

// explain the let with example and issues with possible redeclaration, reassignment and block scope
let b = 10;
console.log(b);
// let b = 20; // This will throw an error: Identifier 'b' has already been declared
b = 20; // This is allowed, reassignment is possible
console.log(b);

function testLet() {
    let b = 30;
    console.log(b);
} 
testLet();
console.log(b); // This will print 20, as the block scope of 'b' inside testLet does not affect the outer 'b'

//----------------------

// explain the const with example and issues with possible redeclaration, reassignment and block scope
const c = 10;
console.log(c);
// const c = 20; // This will throw an error: Identifier 'c' has already been declared
// c = 20; // This will throw an error: Assignment to constant variable
function testConst() {
    const c = 30;
    console.log(c);
}
testConst();
console.log(c); // This will print 10, as the block scope of 'c' inside testConst does not affect the outer 'c'

//----------------------

// explain the block scope with example
if (true) {
    var x = 10; // var is function-scoped, so it will be accessible outside the block
    let y = 20; // let is block-scoped, so it will not be accessible outside the block
    const z = 30; // const is block-scoped, so it will not be accessible outside the block
}
console.log(x); // This will print 10, as var is function-scoped
// console.log(y); // This will throw an error: y is not defined
// console.log(z); // This will throw an error: z is not defined


// In summary:
// - var allows redeclaration and reassignment, and is function-scoped.
// - let does not allow redeclaration but allows reassignment, and is block-scoped.
// - const does not allow redeclaration or reassignment, and is block-scoped.
{
  const d = 40; // const is block-scoped, so it will not be accessible outside the block
  console.log(d); // This will print 40
}
// console.log(d); // This will throw an error: d is not defined


// example for ==(loose equality) vs === (strict equality)
let num1 = 10;
let num2 = "10";
console.log(num1 == num2); // This will print true, as == performs type coercion
console.log(num1 === num2); // This will print false, as === does not perform type coercion and checks for both value and type
// another example
let bool1 = true;
let bool2 = 1;
console.log(bool1 == bool2); // This will print true, as == performs type coercion and converts true to 1
console.log(bool1 === bool2); // This will print false, as === does not perform type coercion and checks for both value and type   


// template literals
const name = "John";
const age = 30;
//console.log("My name is " + name + " and I am " + age + " years old.");

// using template literals and string interpolation
console.log(`My name is ${name} and I am ${age} years old.`); // This will print the same output as above, but with cleaner syntax and easier readability


// primitive data types in JavaScript types
// string, number, boolean, null, undefined, symbol, bigint
// example of primitive data types
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let symbolValue = Symbol("unique"); // symbol   
let bigIntValue = 9007199254740991n; // bigint

console.log(str);
console.log(num);
console.log(bool);
console.log(nullValue);
console.log(undefinedValue);
console.log(symbolValue);
console.log(bigIntValue);

// non-primitive data types in JavaScript
// object, array, function
// example of non-primitive data types
let obj = { name: "Alice", age: 25 }; // object 
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    console.log("Hello!");
}
console.log(obj);
console.log(arr);
greet();


// Stack memory and heap memory in JavaScript
// Stack memory is used for storing primitive data types and function calls, while heap memory is used for storing objects and arrays.
// When a function is called, a new stack frame is created for that function, and when the function returns, the stack frame is removed. 
// Objects and arrays are stored in heap memory, and variables that reference them store the memory address of the object or array in the stack. 
// When an object or array is no longer referenced, it becomes eligible for garbage collection, which frees up memory in the heap.


// operators in JavaScript
// arithmetic operators: +, -, *, /, %, ++, --
// assignment operators: =, +=, -=, *=, /=, %=
// comparison operators: ==, ===, !=, !==, >, <, >=, <=     
// logical operators: &&, ||, !
// conditional (ternary) operator: condition ? expressionIfTrue : expressionIfFalse
// bitwise operators: &, |, ^, ~, <<, >>, >>>

// example of operators in JavaScript
let a1 = 10;
let b1 = 5;
console.log(a1 + b1);   // This will print 15
console.log(a1 - b1);   // This will print 5
console.log(a1 * b1);   // This will print 50
console.log(a1 / b1);   // This will print 2
console.log(a1 % b1);   // This will print 0
a1++; // This will increment a1 by 1, so a1 will become 11
console.log(a1);
b1--; // This will decrement b1 by 1, so b1 will become 4
console.log(b1);

// assignment operators
a1 += 5; // This will add 5 to a1, so a1 will become 16
console.log(a1);
b1 *= 2; // This will multiply b1 by 2, so b1 will become 8
console.log(b1);

// comparison operators
console.log(a1 == b1); // This will print false, as 16 is not equal to 8
console.log(a1 === b1); // This will print false, as 16 is not equal to 8 and they are of the same type
console.log(a1 != b1); // This will print true, as 16 is not equal to 8
console.log(a1 !== b1); // This will print true, as 16 is not equal to 8 and they are of the same type
console.log(a1 > b1); // This will print true, as 16 is greater than 8
console.log(a1 < b1); // This will print false, as 16 is not less than 8
console.log(a1 >= b1); // This will print true, as 16 is greater than or equal to 8
console.log(a1 <= b1); // This will print false, as 16 is not less than or equal to 8
console.log(a1 > 15 && b1 < 10); // This will print true, as 16 is greater than 15 and 8 is less than 10
console.log(a1 > 15 || b1 < 5); // This will print true, as 16 is greater than 15, even though 8 is not less than 5
console.log(!(a1 > 15)); // This will print false, as a1 is greater than 15, so the condition inside the parentheses is true, and the ! operator negates it to false    

// conditional (ternary) operator
let age1 = 18;
let canVote = age1 >= 18 ? "Yes" : "No";    

console.log(canVote); // This will print "Yes", as age1 is greater than or equal to 18  
age1 = 17;
canVote = age1 >= 18 ? "Yes" : "No";    
console.log(canVote); // This will print "No", as age1 is less than 18

// bitwise operators
let x1 = 5; // In binary: 0101
let y1 = 3; // In binary: 0011
console.log(x1 & y1); // This will print 1, as 0101 & 0011 = 0001
console.log(x1 | y1); // This will print 7, as 0101 | 0011 = 0111
console.log(x1 ^ y1); // This will print 6, as 0101 ^ 0011 = 0110
console.log(~x1); // This will print -6, as ~0101 = 1010 (in two's complement, this represents -6)
console.log(x1 << 1); // This will print 10, as 0101 << 1 = 1010 (which is 10 in decimal)
console.log(x1 >> 1); // This will print 2, as 0101 >> 1 = 0010 (which is 2 in decimal)
// Note: Bitwise operators work on 32-bit integers, so the results may not be what you expect if you use them with larger numbers or non-integer values.
// >>> is the unsigned right shift operator, which shifts bits to the right and fills the leftmost bits with zeros. For example:
console.log(x1 >>> 1); // This will print 2, as 0101 >>> 1 = 0010 (which is 2 in decimal)

// logical operators
let a2 = true;
let b2 = false;
console.log(a2 && b2); // This will print false, as true && false is false
console.log(a2 || b2); // This will print true, as true || false is true
console.log(!a2); // This will print false, as !true is false
console.log(!b2); // This will print true, as !false is true    


// sync vs async in JavaScript
// JavaScript is a single-threaded language, which means it can only execute one task at a time. 
// Synchronous code is executed in a sequential manner, where each line of code waits for the previous line to finish before executing. 
// Asynchronous code, on the other hand, allows multiple tasks to be executed concurrently, without blocking the main thread. 
// Asynchronous operations are typically handled using callbacks, promises, or async/await syntax.
// example of synchronous code
console.log("Synchronous code start");  
console.log("Synchronous code end");

// example of asynchronous code using setTimeout    
console.log("Asynchronous code start");
setTimeout(() => {
    console.log("This will be printed after 10 seconds");
}, 10000);
console.log("Asynchronous code end");

// example of asynchronous code using promises  
console.log("Asynchronous code with promises start");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});
console.log("Asynchronous code with promises end");

// example of asynchronous code using async/await   
console.log("Asynchronous code with async/await start");
async function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async function resolved after 2 seconds");
        }, 2000);
    });
}
async function main() {
    const result = await asyncFunction();
    console.log(result);
}   
main();
console.log("Asynchronous code with async/await end");

// ES5 vs ES6
// ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, which was released in 2009. It introduced features like strict mode, JSON support, and new array methods.
// ES6 (ECMAScript 2015) is the sixth edition of the ECMAScript standard, which was released in 2015. It introduced many new features such as let and const for variable declarations, arrow functions, template literals, destructuring assignment, default parameters, rest and spread operators, classes, modules, promises, and more. 
// ES6 brought significant improvements to the JavaScript language, making it more powerful and easier to write cleaner code.


// function in JavaScript
// A function is a reusable block of code that performs a specific task. Functions can take parameters, perform operations, and return values. 
// Functions can be defined using function declarations, function expressions, or arrow functions.
// types of functions in JavaScript

// 1. Function declaration (ES5)
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // This will print 5

// 2. Function expression (ES5)
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // This will print 2

// 3. Arrow function (ES6)
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 5)); // This will print 20

// 4. Implicit return in arrow function (ES6)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // This will print 5

// 5. Function with default parameters (ES6) 
function defaultParams(a, b=10) {
    return a + b;
}
console.log(defaultParams(5)); // This will print 15
console.log(defaultParams(5, 20)); // This will print 25

// callback function using to make a simple calculator(add, subtract, multiply, divide) using callback functions (Higher-order functions)
// Higher-order functions are functions that can take other functions as arguments or return functions as their result.
function calculator(a, b, operation) {
    return operation(a, b);
}   
function addOperation(a, b) {
    return a + b;
}   
function subtractOperation(a, b) {
    return a - b;
}
function multiplyOperation(a, b) {
    return a * b;
}
function divideOperation(a, b) {
    return a / b;
}   
console.log(calculator(10, 5, addOperation)); // This will print 15
console.log(calculator(10, 5, subtractOperation)); // This will print 5
console.log(calculator(10, 5, multiplyOperation)); // This will print 50
console.log(calculator(10, 5, divideOperation)); // This will print 2



//type convertion in JavaScript
 
// Type conversion is the process of converting a value from one data type to another. In JavaScript, type conversion can be done implicitly (coercion) or explicitly (using built-in functions).
// Implicit type conversion (coercion)
let num3 = 10;
let str3 = "5";
console.log(num3 + str3); // This will print "105", as the number 10 is coerced to a string and concatenated with "5"
console.log(num3 - str3); // This will print 5, as the string "5" is coerced to a number and subtracted from 10
console.log(num3 * str3); // This will print 50, as the string "5" is coerced to a number and multiplied with 10
console.log(num3 / str3); // This will print 2, as the string "5" is coerced to a number and divided into 10
// Explicit type conversion
let num4 = 10;
let str4 = "5";
console.log(String(num4) + str4); // This will print "105", as the number 10 is explicitly converted to a string and concatenated with "5"
console.log(num4 - Number(str4)); // This will print 5, as the string "5" is explicitly converted to a number and subtracted from 10
console.log(num4 * Number(str4)); // This will print 50, as the string "5" is explicitly converted to a number and multiplied with 10
console.log(num4 / Number(str4)); // This will print 2, as the string "5" is explicitly converted to a number and divided into 10


// break;
//   → Used inside a loop (for, while, do-while) or switch.
//   → Just the keyword and semicolon. No expression.
//
// continue;
//   → Used only inside a loop (for, while, do-while). Not in switch.
//   → Just the keyword and semicolon. No expression.
//
// Both are usually inside an if, so they run only when a condition is true:
//
//   for (...) {
//     if (condition) {
//       break;     // exit the loop
//     }
//   }
//
//   for (...) {
//     if (condition) {
//       continue;   // skip to next iteration
//     }
//   }

// Break Statement:-
// It is used to break the loop and exit the loop.
// Syntax: break;

// Continue Statement:-
// It is used to skip the current iteration and continue with the next iteration.
// Syntax: continue;

// ---------------------------------------------------------------------------------
//Example of break statement
for(let i=1;i<=10;i++) {
    if(i==5) {
        break;  // Exit loop immediately
    }
    console.log(i);
}
// Output: 1 2 3 4


// ---------------------------------------------------------------------------------
//Example of continue statement
for(let i=1;i<=10;i++) {
    if(i==5) {
        continue;  // Skip this iteration, go to next
    }
    console.log(i);
}
// Output: 1 2 3 4 6 7 8 9 10


//Array methods in JavaScript

//push() - adds an element to the end of the array
//pop() - removes the last element from the array
//shift() - removes the first element from the array
//unshift() - adds an element to the beginning of the array
//splice() - adds/removes elements from the array at a specific index
//slice() - returns a shallow copy of a portion of the array into a new array object
//indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
//includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
//forEach() - executes a provided function once for each array element
//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
//filter() - creates a new array with all elements that pass the test implemented by the provided function
//reduce() - executes a reducer function on each element of the array, resulting in a single output value
// example of array methods in JavaScript
let arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1); // This will print [1, 2, 3, 4, 5, 6]
arr1.pop();
console.log(arr1); // This will print [1, 2, 3, 4, 5]
arr1.shift();
console.log(arr1);// This will print [2, 3, 4, 5]
arr1.unshift(0);
console.log(arr1);// This will print [0, 1, 2, 3, 4, 5]
arr1.splice(2, 2); // This will remove 2 element at index 2
console.log(arr1);
let newArr = arr1.slice(1, 4);
console.log(newArr); // This will print [1, 2, 3]
console.log(arr1.indexOf(3)); // This will print 2, as 3 is at index 2

console.log(arr1.includes(4)); // This will print true, as 4 is in the array
arr1.forEach((element) => {
    console.log(element); // This will print each element of the array
}
);
let mappedArr = arr1.map((element) => element * 2);
console.log(mappedArr); // This will print [0, 2, 6, 8, 10], as each element is multiplied by 2
let filteredArr = arr1.filter((element) => element % 2 === 0);//6 also the even number but it is removed by splice method
console.log(filteredArr);
// This will print [0, 2, 8], as it filters out the even numbers from the array
let reducedValue = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedValue); // This will print 15, as it sums up all the elements of the array starting with an initial value of 0


//some method in array
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let arr2 = [1, 2, 3, 4, 5];
let hasEvenNumber = arr2.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // This will print true, as there are even numbers in the array (2 and 4)

//every method in array
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let hasOnlyEvenNumbers = arr2.every((element) => element % 2 === 0);
console.log(hasOnlyEvenNumbers); // This will print false, as not all elements in the array are even (1, 3, and 5 are odd)