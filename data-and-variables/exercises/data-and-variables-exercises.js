// Declare and assign the variables below

let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384000;
const mpk = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof mpk);

// Calculate a space mission below

let milesToMars = distanceToMars * mpk;
let hoursMars = milesToMars / shuttleSpeed;
let daysMars = hoursMars / 24;

// Print the results of the space mission calculations below

console.log(spaceShuttle + " will take " + daysMars + " days to reach Mars.");

// Calculate a trip to the moon below

let milesToMoon = distanceToMoon * mpk;
let hoursMoon = milesToMoon / shuttleSpeed;
let daysMoon = hoursMoon / 24;

// Print the results of the trip to the moon below

console.log(spaceShuttle + " will take " + daysMoon + " days to reach the Moon.");