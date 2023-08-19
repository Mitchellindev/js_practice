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

// const password = prompt("enter your password:");

// if (password >= 6 && password.indexOf(" ") === -1) {
// 	console.log("valid password");
// } else {
// 	console.log("incorect format");
// }

// const mystery = "Passwor7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
// 	console.log("YOU GOT IT!!!");
// }
// console.log(mystery[0]);
// console.log(mystery.length);
// console.log(mystery.indexOf("7"));

const day = 3;
switch (day) {
	case 1:
		console.log("monday");
		break;
	case 2:
		console.log("tuesday");
		break;
	case 3:
		console.log("wednesday");
		break;
	default:
		console.log("pick a number from 1-3");
		break;
}

//arrays
let mixedArr = ["red", "yellow", 1, 3];

//modifying arrays
mixedArr[1] = "purple";

console.log(mixedArr);
//array methods
let movieLine = ["joy", "gift"];

movieLine.push("sarah", "jane"); // adds to the end of an array
movieLine.pop(); // removes from the end of an array
movieLine.shift(); // removes from the begining of an array
movieLine.unshift("colt", "jerry"); //adds to the beginning of an array
console.log(movieLine);

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let num1_num2 = num1.concat(num2); //combines two arrays

console.log(num1_num2);
console.log(num1_num2.includes(3)); // checks if the arg is included in the array
console.log(num1_num2.reverse()); //reverses an array

let color = ["red", "orange", "yellow", "green", "blue", "pink"];
console.log(color);
console.log(color.slice(2, 6)); //take two arguement start and end

let months = ["jan", "feb", "apr", "may"];
//splice syntax: splice(start, how many things to delete , what to insert)
console.log(months);
months.splice(2, 0, "mar");
console.log(months);
months.splice(5, 0, "jun");
console.log(months);
months.sort(); // arranges an array in alphabetical manner
console.log(months);

//nested array
const tiktac = [
	["O", null, "X"],
	[null, "X", "O"],
	["X", "O", "X"],
];

console.log(tiktac[0][1]);

//objects
const person = {
	name: "Jane",
	age: 22,
	like: "chicken",
	colors: ["red", "yellow"],
};

console.log(person.age);

const restaurant = {
	name: "Ichiran Ramen",
	address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
	city: "Brooklyn",
	state: "NY",
	zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
let fullAddress =
	restaurant.address +
	", " +
	restaurant.city +
	", " +
	restaurant.state +
	" " +
	restaurant.zipcode;
console.log(fullAddress);

const midTerms = { jane: 98, john: 84 };
midTerms.john = 99;
midTerms.jack = 55;
console.log(midTerms);

const shoppingCart = [
	{
		products: "shoe",
		price: "$2.99",
		qty: 2,
	},
	{
		products: "shoe",
		price: "$2.99",
		qty: 2,
	},
	{
		products: "crop top",
		price: "$1.99",
		qty: 1,
	},
	{
		products: "dress",
		price: "$11.99",
		qty: 2,
	},
];

console.log(shoppingCart);
console.log(shoppingCart[2].products);
