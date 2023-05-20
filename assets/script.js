// EVENT LISTENER/QUERY SELECTION
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// VARIABLES/INDECES
var letters = "abcdefghijklmnopqrstuvwxyz";
var numberRange = "0123456789";
var specialCharacters = "~!%^&*-=+";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// INTRODUCTION
// INTRODUCTION
alert(
  "¡Bienvenidos! I'm here to generate a password for you; to get started, click on the red, 'Generate Password' button - you'll be asked a series of questions, and then my robo-brain will spin some wheels (beep-boop) to get you a solid password. Let's get started!"
);

var generatePassword = function () {
  // PASSWORD LENGTH
  // PASSWORD LENGTH

  // PROMPT
  var lengthPrompt = prompt(
    "How many characters would you like in your password? (Choose a number between 8-128; whole numbers only - no decimals.)"
  );

  while (lengthPrompt > 128 || lengthPrompt < 8) {
    alert(
      "Oops! Your input ('" +
        lengthPrompt +
        "') is not within the specified range; please select a number from 8-128 for your password character-length."
    );
    lengthPrompt = prompt(
      "How many characters would you like in your password? (Choose a number between 8-128; whole numbers only - no decimals."
    );
  }
  // CONFIRMATION
  alert(
    "You have chosen " + lengthPrompt + " characters for your password length."
  );

  // LOWERCASE
  // LOWERCASE

  // PROMPT
  var lowLetterPrompt = confirm(
    "Would you like your password to include lowercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
  );

  // CONFIRMATION
  if (lowLetterPrompt === true) {
    alert("You have chosen to inlcude lowercase letters.");
    var lowercase = Array.from(letters);
  } else {
    alert("You have chosen to exclude lowercase letters.");
    var lowercase = "";
  }

  // UPPERCASE
  // UPPERCASE

  // PROMPT
  var upLetterPrompt = confirm(
    "Would you like your password to include uppercase letters? Hit 'okay' to include; hit 'cancel' to exclude."
  );

  // CONFIRMATION
  if (upLetterPrompt === true) {
    alert("You have chosen to inlcude uppercase letters.");
    var uppercase = Array.from(letters.toUpperCase());
  } else {
    alert("You have chosen to exclude uppercase letters.");
    var uppercase = "";
  }

  //  NUMBERS
  //  NUMBERS

  // PROMPT
  var numberPrompt = confirm(
    "Would you like your password to include numbers? Hit 'okay' to include; hit 'cancel' to exclude."
  );

  // CONFIRMATION
  if (numberPrompt === true) {
    alert("You have chosen to inlcude numbers.");
    var number = Array.from(numberRange);
  } else {
    alert("You have chosen to exclude numbers.");
    var number = "";
  }

  //  SPECIAL CHARACTERS
  //  SPECIAL CHARACTERS

  // PROMPT
  var specCharPrompt = confirm(
    "Would you like your password to include special characters? Hit 'okay' to include; hit 'cancel' to exclude."
  );

  // CONFIRMATION
  if (specCharPrompt === true) {
    alert("You have chosen to inlcude special characters.");
    var character = Array.from(specialCharacters);
  } else {
    alert("You have chosen to exclude special characters.");
    var character = "";
  }

  // ISSUE: NO CRITERION SELECTED...
  if (
    lowLetterPrompt === false &&
    upLetterPrompt === false &&
    numberPrompt === false &&
    specCharPrompt === false
  ) {
    alert(
      "Ruh Roh! You must select at least one criterion to include in your password. Please try again - you will be redirected to the first prompt."
    );
    writePassword();
  } else {
    // CALCULATE PASSWORD
    // CALCULATE PASSWORD

    var password = "";
    var randomChar = lowercase.concat(uppercase, number, character);
    for (i = 0; i < parseInt(lengthPrompt); i++) {
      var passwordRandom = Math.floor(
        Math.random() * parseInt(randomChar.length)
      );
      password += randomChar[passwordRandom];
    }
    return password;
  }
};
