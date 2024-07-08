let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
}

// After you have created the other object literals, add the astronautID property to each one.

// superChimpOne.astronautID = 1;
// salamander.astronautID = 2;
// chimpanzee.astronautID = 3;
// beagle.astronautID = 4;
// tardigrade.astronautID = 5;

// Add a move method to each animal object

// superChimpOne.move = Math.floor(Math.random() * 11);

// salamander.move = Math.floor(Math.random() * 11);

// chimpanzee.move = Math.floor(Math.random() * 11);

// beagle.move = Math.floor(Math.random() * 11);

// tardigrade.move = Math.floor(Math.random() * 11);

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

// Print out the relevant information about each animal.

let crewReports = (animal) => {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(chimpanzee));
console.log(crewReports(beagle));
console.log(crewReports(tardigrade));

// Start an animal race!

let fitnessTest = (arr) => {
   let stepArr = [];

   for (let i = 0; i < arr.length; i++) {
      let turn = 0;
      let steps = 0;

      while (steps < 20) {
         steps += arr[i].move();
         turn++;
      }

      let str = `${arr[i].name} took ${turn} turns to take 20 steps.`;

      stepArr[i] = str;
   }

   return stepArr;
}

for (animal of fitnessTest(crew)) {
   console.log(animal);
}