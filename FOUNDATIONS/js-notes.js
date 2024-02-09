//define variables with let method //
// repeated declaration causes error //
let message;
message = "hello";
// older vers of declaring variables //
var massage;
massage = "hello";

//const can be used to define variables that are unchanging, common practice to uppercase const variables//
const MESSIEGE = 123;

// declaring strings
const string = "hello"
console.log(string);

//Property access (returns undenfined, while charAt() returns empty string)
let text = "HELLO WORLD!";

text[0] = 'A';


// embedding js

const name  = 'zach';
const greeting = 'Hello, ${name}';
console.log(greeting);

//concatenation

function greet() {

    const name = prompt("what is your name?");
    const greeting = document.querySelector('#greeting');
    greeting.textcontent = 'Hello ${name}, nice to meet you!';
}
button.addEventListener("click", greet);

//slice()
//substring(same as slice except value lower than 0 are treated as 0)
//substr(second parameter specifies length)
let text = "hello world";
let text2 = text.slice(5, 10);

//uppercase()/lowercase()
let text3 = text.toLowerCase;
let text4 = text.toUpperCase;

//concat()
let text5 = text3.concat(" ", text2);

//trim(trimStart() removes whitespace from start of string, trimEnd() removes for end)
let text6 = "             Hello World!                      ";
let text7 = text6.trim();

//padding(padStart() adds from start of string, padEnd() adds for end, for some reason whitespace doesnt work ಠಿ_ಠ)
let paddedtext = text7.padStart(4, "0");
let paddedtext2 = paddedtext.padStart(4, "0");

//repeat(creates string of repeated string)
let text8 = text.repeat(5);

// arrow function shorthand functions
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/






