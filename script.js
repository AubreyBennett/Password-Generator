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

var length = prompt('Enter the length of the password');
console.log(length);

if (length < 8 || length > 128) {
  alert('The length is invalid.');
}
else {
  var specialAllowed = confirm('Do you want special characters in your password?');
  console.log(specialAllowed);
}



var lowerAllowed = confirm('Do you want lowercase characters in your password?');
console.log(lowerAllowed);

var upperAllowed = confirm('Do you want uppercase characters in your password?');
console.log(upperAllowed);

var numberAllowed = confirm('Do you want numbers in your password?');
console.log(numberAllowed);