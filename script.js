// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


var length = prompt('Enter the length of the password');
console.log(length);

var specialAllowed = confirm('Do you want special characters in your password?');
console.log(specialAllowed);