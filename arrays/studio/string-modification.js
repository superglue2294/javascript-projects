const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThree = str.slice(0, 3);
let last = str.slice(3)
console.log(last.concat(firstThree));

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let num = input.question("Enter a number: ");
let part1 = '';
let part2 = '';
let combined = '';

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (num > str.length) {
    part1 = str.slice(0, 3);
    part2 = str.slice(3);
    combined = part2.concat(part1);
    console.log(`Number entered, ${num}, is greater than the length of the string 'LaunchCode', ${str.length}. 
        Returning default, with num = 3: ${combined}`);
} else {
    part1 = str.slice(0, num);
    part2 = str.slice(num);
    combined = part2.concat(part1);
    console.log(`With num = ${num}, the first ${num} letters moved to the end looks like this: ${combined}`);
}