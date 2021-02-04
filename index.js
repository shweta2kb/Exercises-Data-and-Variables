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

let milesToMars =milesPerKilometer*distanceToMars;
let hourToMars= distanceToMars/shuttleSpeed;
let dayToMars;
// Code your solution to exercises 3 and 4 here:

console.log(milesToMars+" will take " +hourToMars+ " days to reach Mars."); 





// Code your solution to exercise 5 here:
