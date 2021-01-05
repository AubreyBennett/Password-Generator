// Assignment Code
var length;
var specialAllowed;
var lowerAllowed;
var upperAllowed;
var numberAllowed;

// variables
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "<", ">", "?", ":"]

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  
}

var length = prompt('Enter the length of the password');
console.log(length);

if (length < 8 || length > 128) {
  alert('The length is invalid.');
}
else {
  var combined = [];

  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "<", ">", "?", ":"]
  var specialAllowed = confirm('Do you want special characters in your password?');
  console.log(specialAllowed);

  if (specialAllowed) {
    combined = combined.concat(specialAllowed);
  }

  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var numberAllowed = confirm('Do you want numbers in your password?');
  console.log(numberAllowed);

  if (numberAllowed) {
    combined = combined.concat(specialAllowed);
  }

  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var lowerAllowed = confirm('Do you want lowercase in your password?');
  console.log(lowerAllowed);

  if (lowerAllowed) {
    combined = combined.concat(lowerAllowed);
  }

  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var upperAllowed = confirm('Do you want uppercase characters in your password?');
  console.log(upperAllowed);

  if (upperAllowed) {
    combined = combined.concat(upperAllowed);
  }

  var random = Math.floor(Math.random() * combined.length);
  console.log(combined[random]);
}

// if (length && specialAllowed){
//   var lowerAllowed = confirm('Do you want lowercase characters in your password?');
//   console.log(lowerAllowed);
// }
// else{
//   var upperAllowed = confirm('Do you want uppercase characters in your password?');
//   console.log(upperAllowed);
// }
// if (length && specialAllowed && upperAllowed){
//   var numberAllowed = confirm('Do you want numbers in your password?');
//   console.log(numberAllowed);
// }







