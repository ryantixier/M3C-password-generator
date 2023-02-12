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
//// visit website: prompts...
//////1.  8-128 characters (<if> loop; >= 8 && <= 128) >>> sting input (NOT ===)
//////2.  lowercase?    \
//////2.  uppercase?    | >>> yes/no prompts
//////2.  numbers?      | >>> (maybe use radio button?)
//////2.  symbols?      /
