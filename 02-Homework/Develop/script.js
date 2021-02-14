// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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
  var confirmLength = (prompt("How long would you like your password to be?"));


while(confirmLength <=8 || confirmLength >= 128) {
  alert("Password must be between 8 and 128 characters");
  var confirmLength = (prompt("How long would you like your password to be?"));
}

  alert("Your password will be " + confirmLength + " characters long!");


var confirmNumbers = confirm("Would you like numbers in your password?");
var confirmSpecialCharacters = confirm("Would you like special characters in your password?");
var confirmUpperCase = confirm("Would you like upper case letter in your password?");
var confirmLowerCase = confirm("Would you like lower case letters in your password?");

while(confirmNumbers === false && confirmSpecialCharacters === false && confirmUpperCase === false && confirmLowerCase === false) {
  alert("You must choose at least one of the criteria");
  var confirmNumbers = confirm("Would you like numbers in your password?");
  var confirmSpecialCharacters = confirm("Would you like special characters in your password?");
  var confirmUpperCase = confirm("Would you like upper case letter in your password?");
  var confirmLowerCase = confirm("Would you like lower case letters in your password?");
}

  var passwordCharacters = []

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  var randomPassword = ""
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

    





  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

    


    


    





