// Assignment Code
var length;
var specialAllowed;
var lowerAllowed;
var upperAllowed;
var numberAllowed;

special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "<", ">", "?", ":"]

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // something not defined in the line below???????????????
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var length = prompt('Enter the length of the password');
  console.log("Length: ");
  console.log(length);

  if (length < 8 || length > 128) {
    alert('The length is invalid.');
  }
  else {
    var combined = [];

    var specialAllowed = confirm('Do you want special characters in your password?');
    console.log("Special characters: ");
    console.log(specialAllowed);

    if (specialAllowed) {
      combined = combined.concat(special);
      console.log(combined);
    }

    var numberAllowed = confirm('Do you want numbers in your password?');
    console.log("Numbers: ");
    console.log(numberAllowed);

    if (numberAllowed) {
      combined = combined.concat(number);
    }

    var lowerAllowed = confirm('Do you want lowercase in your password?');
    console.log("Lowercase characters: ");
    console.log(lowerAllowed);

    if (lowerAllowed) {
      combined = combined.concat(lower);
    }

    var upperAllowed = confirm('Do you want uppercase characters in your password?');
    console.log("Uppercase characters: ");
    console.log(upperAllowed);

    if (upperAllowed) {
      combined = combined.concat(upper);
    }
    console.log(combined.length);

    var password = "";
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * combined.length);
        password += (combined[random]);
      }
      return password;
  }

}









