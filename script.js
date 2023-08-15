// avriable declaration

let year = 2023;

// strings
let favouriteColor = "purple";
let username = "chelly";

console.log(username);
console.log(username[0]);
console.log(username.length);

//string methods
console.log(username.toUpperCase());
let userInput = "     hello my name is rich    ";
console.log(userInput.trim()); //trim removes any white space at the begining or end of a string

//string method with arguement
console.log(userInput.trim().indexOf("r"));
console.log(userInput.trim().slice(5, 10));

console.log(userInput.replace("rich", "des"));

//template literals

let product = "shoe";
let price = 5000;
let qty = 2;

let msg = `you bought ${qty} pairs of ${product}. Total price is ${
	price * qty
}`;
console.log(msg);

//math objects
console.log(Math.ceil(Math.random() * 5) + 1);

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log(roll);

//conditionals
let num = Math.random() * 4;

if (num % 2 === 0) {
	console.log("even");
}
