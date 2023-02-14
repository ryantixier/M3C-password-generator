//
// ASSIGNMENT SOURCE CODE HERE

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// END ASSIGNMENT SOURCE CODE
//

// PSEUDOCODE //
////////////////

//// PROCESS - VISIT URL... SEQUENTIAL PROMPTS:
//// //1.*  8-128 characters (<if> loop; >= 8 && <= 128) >>> sting input (NOT ===)
//// //2.*  lowercase?    -\
//// //3.*  uppercase?    -| >>> yes/no prompts
//// //4.*  numbers?      -| >>> (maybe use radio button?)
//// //5.*  symbols?      -|
//// //6.**  final conf   -/
//
//// * confirm selection after each prompt is answered
// // CODE:
// //// window.display("You have selected " + [selection] + " would you like to keep this selection?")
// //// <if> ([input] === true), continue to next prompt/loop
// //// <else> restart previous loop
//
//// ** final confirmation: list selections to previous prompts
// // CODE:
// //// window.display("You have selected " + [<ul> displaying selections] " are you happy with your criteria?"
// //// <if> ([input] === true) {gereate/display password}
// //// <else> {restart from character quantity selection (1st loop)}
//
// generate pw & display to complete

// NOTES:
//// create variables/keys (constants) first...
///// 4 true/false inputs; 1 string input
//// how should I structure my <for> loop?
//// look up how to generate/put together strings of responses
//// çreate variables
////// vars -
// //////(1) passwordLength;
// //////(2) lowecase;
// //////(3) upShift(lowecase) || uppercase
// ////// ////// >>try upsShift(lowercase) for var; if not possible, var uppercase<<
// //////(4) numbers;
// //////(5) symbols...
//
//// create character sets as constants (?)...
////// consts -
// //////(1) letters (range)
// //////(2) numbers (range)
// //////(3) specialChars (just do top of keyboard)
//
// FINAL NOTE: YOU GOT THIS! KEEP YOUR HEAD UP!!!
//
//
//
//

// // // BEGIN CODE // // //

// INDECES //
/////////////

// DECLARING CONSTANTS: CHARACTER INDEX //
const letters = "abcdefghijklmnopqrstuvwxyz";
const numberRange = "0123456789";
const specialChars = "~!%^&*-=+";

// CREATING VAR ARRAYS TO SEPARATE CHARACTERS WITHIN CHARACTER CONSTANTS ABOVE
var lowercase = Array.from(letters);
// console.log(lowercase);
// lowercase array, turns 'letters' const into an array
var uppercase = Array.from(letters.toUpperCase());
// console.log(uppercase);
// uppercase array, turns 'letters' const into an array w capital letters
var number = Array.from(numberRange);
// console.log(number); turns numberRange const into an array
var character = Array.from(specialChars);
// console.log(character); turns specialChars const into an array
var randomChar = lowercase.concat(uppercase, number, character);
// console.log(randomChar); concatenates var arrays into single array, stored as string

//

// WINDOW PROMPTS  //
/////////////////////

alert(
  "¡Bienvenidos! I'm here to generate a password for you; you'll be asked a series of questions, and then my robo-brain will spin some wheels to get you a solid password. Let's get started!"
);
// introductory window

var lengthPrompt = prompt(
  "How many characters would you like in your password? (Choose a number between 8-128; whole numbers only - no decimals)."
);
// lengthPrompt: stores value for user's desired password length
// requires numerical input, but stored in var as a string

while (lengthPrompt > 128 || lengthPrompt < 8) {
  alert(
    "Oops! " +
      lengthPrompt +
      " character(s) is not within the specified range; please select a number from 8-128 for your password character-length."
  );
  lengthPrompt = prompt(
    "How many characters would you like in your password? (Choose a number between 8-128; whole numbers only - no decimals."
  );
}
// Incorporated condition <while> loop for lengthPrompt,
// user loops back to prompt if input is invalid
// code progresses once condition is met

alert(
  "You have chosen " + lengthPrompt + " characters for your password length."
);
// validates user input

var lowLetterPrompt = confirm(
  "Would you like your password to include lowercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
);
// lowLetterPrompt: stores value for user's lowercase preferences
// boolean

if (lowLetterPrompt === true) {
  alert("You have chosen to inlcude lowercase letters.");
} else {
  alert("You have chosen to exclude lowercase letters.");
}
// validates according to user input's condition

var upLetterPrompt = confirm(
  "Would you like your password to include uppercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
);
// upLetterPrompt: stores value for user's uppercase preferences
// boolean

if (upLetterPrompt === true) {
  alert("You have chosen to inlcude uppercase letters.");
} else {
  alert("You have chosen to exclude uppercase letters.");
}
// validates according to user input's condition

var numberPrompt = confirm(
  "Would you like your password to include numbers? Hit 'okay' to include; hit 'cancel' to exclude."
);
// numberPrompt: stores value for user's number preferences
// boolean

if (numberPrompt === true) {
  alert("You have chosen to inlcude numbers.");
} else {
  alert("You have chosen to exclude numbers.");
}
// validates according to user input's condition

var specCharPrompt = confirm(
  "Would you like your password to include special characters? Hit 'okay' to include; hit 'cancel' to exclude."
);
// specCharPrompt: stores value for user's special character preferences
// boolean

if (specCharPrompt === true) {
  alert("You have chosen to inlcude special characters.");
} else {
  alert("You have chosen to exclude special characters.");
}
// upLetterPrompt: stores value for user's uppercase preferences

//

// PASSWORD GENERATOR //
////////////////////////

//
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPassword = "";
  for (i = 0; i < parseInt(lengthPrompt); i++) {
    var passwordRandom = Math.floor(Math.random() * randomChar.length);
    finalPassword += randomChar[passwordRandom];
    // return passwordRandom[i];
    // return (passwordText[i] = lengthPrompt[randomChar]);
    // return (randomChar[i] = lengthPrompt[passwordRandom]);
  }
  return finalPassword;
}

// var finalPassword =
console.log(finalPassword);
// console.log(randomChar);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generatePassword();

// writePassword();

generateBtn.addEventListener("click", writePassword);

//

//

//

// CODE SNIPPETS //
///////////////////

// MAY NOT NEED, BUT CREATED VAR/ARRAY TO CONSOLIDATE THE STORED VALUES FOR SELECTIONS
// var selections = [
//   lengthPrompt,
//   lowLetterPrompt,
//   upLetterPrompt,
//   numberPrompt,
//   specCharPrompt,
// ];

// randomizes characters selected by the generator
// var passwordLower = [Math.floor(Math.random() * lowercase.length)];
// var passwordUpper = [Math.floor(Math.random() * uppercase.length)];
// var passwordNumber = [Math.floor(Math.random() * number.length)];
// var passwordSpecChar = [Math.floor(Math.random() * character.length)];
// turns randomized character selections into an array
