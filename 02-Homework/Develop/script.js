// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var confirmLength ="";
var confirmNumbers;
var confirmSpecialCharacters;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var confirmLength = prompt("How long would you like your password to be?"));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
