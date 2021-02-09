// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToThemoon = 384400;
let milesPerKilometer =0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToThemoon);
console.log(typeof milesPerKilometer);

let milesToMars = milesPerKilometer*distanceToMars;
let hourToMars= distanceToMars/shuttleSpeed;
let dayToMars= hourToMars/24;
// Code your solution to exercises 3 and 4 here:

let milesToTheMoon = milesPerKilometer*distanceToThemoon;
let hourToTheMoons= milesToTheMoon/shuttleSpeed;
let dayToTheMoon = hourToMars/24;

console.log(milesToMars+" will take " +dayToMars+ " days to reach Mars."); 

console.log(milesToTheMoon+"will take"+dayToTheMoon +"days to reach the Moon.");





// Code your solution to exercise 5 here:
