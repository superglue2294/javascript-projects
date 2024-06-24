const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArr = food.split(",").sort();
console.log(foodArr);

let equipmentArr = equipment.split(",").sort();
console.log(equipmentArr);

let petsArr = pets.split(",").sort();
console.log(petsArr);

let sleepAidsArr = sleepAids.split(",").sort();
console.log(sleepAidsArr);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];

cargoHold.push(foodArr, equipmentArr, petsArr, sleepAidsArr);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let selectCabinet = input.question("Choose a number (0, 1, 2, or 3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (selectCabinet >= 0 && selectCabinet <= 3) {
    console.log(`The contents of the selected canbinet: ${cargoHold[selectCabinet]}`);
} else {
    console.error(`The number ${selectCabinet} is out of range.`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let num = input.question("Choose a number (0, 1, 2, or 3): ");
let item = input.question("What item are you looking for?: ");

if (num >= 0 && num <= 3) {
    if (cargoHold[num].includes(item.trim().toLowerCase())) {
        console.log(`Cabinet ${num} DOES contain ${item}.`);
    } else {
        console.log(`Cabinet ${num} DOES NOT contain ${item}.`);
    }
} else {
    console.error(`The number ${num} is out of range.`);
}