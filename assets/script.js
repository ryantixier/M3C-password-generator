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

//// PROCESS - VISIT URL... 5 SEQUENTIAL PROMPTS:
//////1.*  8-128 characters (<if> loop; >= 8 && <= 128) >>> sting input (NOT ===)
//////2.*  lowercase?    \
//////3.*  uppercase?    | >>> yes/no prompts
//////4.*  numbers?      | >>> (maybe use radio button?)
//////5.*  symbols?      /
//// * confirm selection after each prompt is answered!!
////// "You have selected _([yes/no])_; would you like to keep this selection?"
//// (<if> === [confirm]), continue to next prompt/loop - if @ end, generate pw
////// <else> restart previous loop - if @ end, restart from character select (1st loop)
//// * final confirmation: list/summarize selections to previous prompts
////// You have selected _(<ul> displaying selections)_; are you happy with your criteria?"
//// (<if> === [confirm]) {gereate/display password}
////// <else> {restart from character quantity selection (1st loop)}
// when all is complete - generate pw & display

// NOTES:
//// create variables first...
///// 4 yes/no inputs; 1 string input
//// how should I structure my <for> loop?
//// look up how to generate/put together strings of responses
//// what vars do I need? how many?

// FINAL NOTE: YOU GOT THIS! KEEP YOUR HEAD UP!!!
