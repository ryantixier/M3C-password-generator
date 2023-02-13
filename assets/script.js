// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PSEUDOCODE

//// PROCESS - VISIT URL... SEQUENTIAL PROMPTS:
//// //1.*  8-128 characters (<if> loop; >= 8 && <= 128) >>> sting input (NOT ===)
//// //2.*  lowercase?    -\
//// //3.*  uppercase?    -| >>> yes/no prompts
//// //4.*  numbers?      -| >>> (maybe use radio button?)
//// //5.*  symbols?      -|
//// //6.**  final conf..  -/
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
//// create variables first...
///// 4 yes/no inputs; 1 string input
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
// //////(5) letters
//
// FINAL NOTE: YOU GOT THIS! KEEP YOUR HEAD UP!!!
//
//
//
//

// CODE
// CODE
// CODE

// const letters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = 0-9;
// const specialChars = "`~!@#$%^&*-_=+"

// var passwordLength = ;
// var lowercase = letters;
// var uppercase = (???) upShift(letters)
