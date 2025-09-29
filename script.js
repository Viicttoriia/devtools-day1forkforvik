// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); 
/* just a spelling mistake */
// Error 2: 
console.log(document);
/*ways to access elements of the document - getelements and queryselector
*/
let button = document.querySelector('.actionButton'); 

/* Everything is an Object
*/
/*when you click the button it is logged in the console*/
console.log(button.outerHTML);
/*adding outerHTML allows you to see the string*/
/*event listeners are ways you can attach live actions in javascript*/
button.addEventListener('click', eventHandler); 
/*functions are independet \ methods are bound to an object*/
// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = 'Updated message';
  console.log(localMessage); 
}
updateMessage();
/*console.log needed to me moved to complete call function*/

// Error 7:
document.getElementById('testButton').addEventListener('click', testFunction());

function testFunction() {
  console.log('Test function executed');
}
/* button was clicked */
// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));
/* console should state sum is 5 */
// Error 9: 
let nullVar = null;
console.log(nullVar.length);

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(CaseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log('importantData');

// Error 12: 
tryToCallFunction();

// Error 13:
let user = { namee: 'Alice' };
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber.toUpperCase()); 

// Error 15:
// three types of variables
// let 
// const - value that can not change
// var - var that can be updated
/* different notation */ 
let greeting = Hello, world!;

// Error 16: 
for (let i = 0; i < 5; i++); {
    console.log(i);
}

// Error 17::
let five = '5';
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
console.log(x);
x = 5;

// Error 20::
let myString = 'Hello';
myString.property = 'World';
console.log(myString.property); 

