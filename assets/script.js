// KEY(S) ✅
// KEY(S) ✅
const letters = "abcdefghijklmnopqrstuvwxyz";
const numberRange = "0123456789";
const specialCharacters = "~!%^&*-=+";

var lowercase = Array.from(letters);
var uppercase = Array.from(letters.toUpperCase());
var number = Array.from(numberRange);
var character = Array.from(specialCharacters);
var randomChar = lowercase.concat(uppercase, number, character);

// INTRODUCTION ✅
// INTRODUCTION ✅
alert(
  "¡Bienvenidos! I'm here to generate a password for you; you'll be asked a series of questions, and then my robo-brain will spin some wheels to get you a solid password. Let's get started!"
);

//
//

// PASSWORD LENGTH ✅
// PASSWORD LENGTH ✅

// PROMPT ✅
var lengthPrompt = prompt(
  "How many characters would you like in your password? (Choose a number between 8-128; whole numbers only - no decimals)."
);

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
// CONFIRMATION ✅
alert(
  "You have chosen " + lengthPrompt + " characters for your password length."
);

//
//

// INCLUDE LOWERCASE?
// INCLUDE LOWERCASE?

// PROMPT
var lowLetterPrompt = confirm(
  "Would you like your password to include lowercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
);

// CONFIRMATION
if (lowLetterPrompt === true) {
  alert("You have chosen to inlcude lowercase letters.");
  lowercase;
} else {
  alert("You have chosen to exclude lowercase letters.");
  lowercase = "";
}

//
//

// INCLUDE UPPERCASE?
// INLCUDE UPPERCASE?

// PROMPT
var upLetterPrompt = confirm(
  "Would you like your password to include uppercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
);

// CONFIRMATION
if (upLetterPrompt === true) {
  alert("You have chosen to inlcude uppercase letters.");
  uppercase;
} else {
  alert("You have chosen to exclude uppercase letters.");
  uppercase = "";
}

//
//

// INCLUDE NUMBERS?
// INCLUDE NUMBERS?

// PROMPT

// CONFIRMATION

//
//

// INCLUDE SPECIAL CHARACTERS?
// INLCUDE SPECIAL CHARACTERS?

// PROMPT

// CONFIRMATION

//
//

// VALIDATE SELECTIONS
// VALIDATE SELECTIONS

//
//

// GENERATE PASSWORD
// GERATE PASSWORD

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  for (i = 0; i < parseInt(lengthPrompt); i++) {
    var passwordRandom = Math.floor(
      Math.random() * parseInt(randomChar.length)
    );
    password += randomChar[passwordRandom]; // ???
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//
//
//
//

// var upLetterPrompt = confirm(
//   "Would you like your password to include uppercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
// );
// // upLetterPrompt: stores value for user's uppercase preferences
// // boolean

// if (upLetterPrompt === true) {
//   alert("You have chosen to inlcude uppercase letters.");
// } else {
//   alert("You have chosen to exclude uppercase letters.");
// }
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

var generateBtn = document.querySelector("#generate");
// creates refernce (variable) linked to <button> element id 'generate' in document object

// WORK IN PROGRESS //
function generatePassword() {
  // DECLARES FUNCTION generatePassword
  var finalPassword = "";
  // DECLARES VARIABLE finalPassword AS AN EMPTY STRING
  for (i = 0; i < parseInt(lengthPrompt); i++) {
    // <for> ([index starting point]; [range]; [increment])
    // cycles through lengthPrompt string index until # of iterations = lengthPrompt value
    // parseInt: recalls string value from lengthPrompt and converts it to an integer
    var passwordRandom = Math.floor(
      Math.random() * parseInt(randomChar.length)
    );
    // creates variable to represent randomized
    // :: Math.random() :: method (?) to randomly select numbers w/in 'Math' object
    // :: parseInt(randomChar.length) :: converts randChar from string to numerical values;
    //                                :: string items become referenceable by numerical place in array
    // :: Math.floor(...*...) :: method (?) to ....{{{idk}}}.... the equation
    // LOOK INTO THIS MORE - ASK BEN OR JUSTIN
    finalPassword += randomChar[passwordRandom];
    // LOOK INTO THIS MORE TOO... PLS - ASK BEN OR JUSTIN
  }
  return finalPassword;
  // OUTPUT VALUE FOR finalPassword
}
// console.log(finalPassword); currently (2/13/23, 8:52PM) says finalPassword value is underfined... T.T

function writePassword() {
  // DECLARES FUNCTION writePassword as a command
  var password = generatePassword();
  // DECLARES VARIABLE password; when called, will run generatePassword function above
  var passwordText = document.querySelector("#password");
  // creates refernce (variable) linked to <textarea> element id 'password' in document object
  passwordText.value = password;
  // provides placeholder text ("password"), disappears when generateBtn is selected
}

generateBtn.addEventListener("click", writePassword);
// creates event listener 'click'; runs writePassword function once "generate" button is clicked
