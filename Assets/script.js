// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// special characters to be included in password
var specialSymbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// numbers to be included in password
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// lowercase letters to be included in password
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// uppercase letters to be included in password
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passwordLength = ".";

var userRepsonseSymbols =  ".";

var userResponseNumerics = ".";

var userResponseLower = ".";

var userResponseUpper = ".";

var finalPassword = ".";

//var allchoices = specialSymbols.concat(numerics, lowerCase, upperCase);
//validate as we go

//prompt("Do you want to include numbers in your password?");
//write code to confirm y/n   
//prompt("Do you want uppercase letters in your password?");
//write code to confirm y/n 
//prompt("Do you want lowercase letters in your password?");
//write code to confirm y/n 
//prompt("Do you want special symbols in your password?");
//write code to confirm y/n 


  //TODO: your code here

//function passwordLength(){
function generatePassword(){
  passwordLength = parseInt(prompt ("Choose a password length between 8 and 128 characters long."));
  console.log (passwordLength);
  if(passwordLength >= 8) {
    alert ("GoodChoice");
   
  } else if (passwordLength <=128) {
    
    alert ("Choose a password length between 8 and 128 characters long.");
  } else {
    alert ("Start Over");
  }
   
  var userResponseNumerics = confirm ("Do you want to include numbers in your password?");
  if (userRepsonseSymbols = true) {
    alert ("you want numbers");
  } else {
    alert("No numbers for you");
}
 
  var userResponseUpper = confirm ("Do you want uppercase letters in your password?");
  if (userResponseUpper = true) {
    alert ("You want uppers");
  } else {
    alert ("No uppers for you");
  }

  var userResponseLower = confirm ("Do you want lowercase letters in your password?");
  if (userResponseLower = true) {
    alert ("You want lowers");
  } else {
    alert ("No lowers for you");
  }

  var userRepsonseSymbols = confirm ("Do you want special symbols in your password?");
  if (userResponseSymbols = true) {
    alert ("You want symbols");
  } else {
    alert ("No symbols for you");    
  }
// add all true confirms to possible characters array = specialSymbols.concat(numerics, lowerCase, upperCase);

// Create loop for as long as paswardLength
//for each iteration select a random character from possible characters array and add to final password variable

//return the final password from the generatePassword function
  

//return finalPpassword
}

 //}



  //return "password"

//display a prompt asking for a password
  //todo match edges case is a number&&>= 8 <20
// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;



// Add event listener to generate button
// DO NOT CHANGE THIS CODE


}
generateBtn.addEventListener("click", writePassword);