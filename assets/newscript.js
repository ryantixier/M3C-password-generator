// KEY(S)
const letters = "abcdefghijklmnopqrstuvwxyz";
const numberRange = "0123456789";
const specialCharacters = "~!%^&*-=+";

var lowercase = Array.from(letters);
var uppercase = Array.from(letters.toUpperCase());
var number = Array.from(numberRange);
var character = Array.from(specialCharacters);
// console.log(character); turns specialChars const into an array
//
//
//
//

// INTRODUCTION
// INTRODUCTION
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

//
//

// INCLUDE UPPERCASE?
// INLCUDE UPPERCASE?

//
//

// INCLUDE NUMBERS?
// INCLUDE NUMBERS?

//
//

// INCLUDE SPECIAL CHARACTERS?
// INLCUDE SPECIAL CHARACTERS?

//
//

// CONFIRM SELECTIONS
// CONFIRM SELECTIONS

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
