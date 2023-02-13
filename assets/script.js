// Assignment code here

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

// PSEUDOCODE

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

// CODE
// CODE
// CODE

const letters = "abcdefghijklmnopqrstuvwxyz";
const numberRange = "0123456789";
const specialChars = "~!%^&*-=+";

var lowercase = Array.from(letters);
// console.log(lowercase); turns letters const into a string
var uppercase = Array.from(letters.toUpperCase());
// console.log(uppercase); capitalizes alphabet characters in letters variable
var number = Array.from(numberRange);
// console.log(number); turns numberRange const into a string
var character = Array.from(specialChars);
// console.log(character); turns specialChars const into a string

var passwordPrompt = prompt(
  "How many characters would you like in your password? (Choose a number between 8-128)."
);
var lowLetterPrompt =
  "Would you like your password to include lowercase letters?";
var upLetterPrompt =
  "Would you like your password to include uppercase letters?";
var numberPrompt = "Would you like your password to include numbers?";
var specCharPrompt =
  "Would you like your password to include special characters?";

// var lengthConf = "You have selected " +

if (passwordPrompt > 128 || passwordPrompt < 8) {
  alert(
    "Oops! That number is not accepted; please select a number from 8-128 for your password character-length."
  );
} else {
}

// slice(Math.floor(Math.random)) *
