// Assignment Code
var generateBtn = document.querySelector("#generate");


// Declare Inputs
var upperCaseCheck = document.querySelector(".uppercase")
var lowerCaseCheck = document.querySelector(".lowercase")
var numericCheck = document.querySelector(".numeric")
var specialCheck = document.querySelector(".special")
var rangeSlider = document.querySelector(".range")

// Declare Characters
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numericChar = "0123456789"
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"


//Generate Password
function generatePassword () {
  const settings = {
    upperCase:upperCaseCheck.checked,
    lowerCase:lowerCaseCheck.checked,
    numeric:numericCheck.checked,
    special:specialCheck.checked,
    range:rangeSlider.value
  }
  let includedChar = "";
  settings.upperCase ? (includedChar += upperChar) : "" ;
  settings.lowerCase ? (includedChar += lowerChar) : "" ;
  settings.numeric ? (includedChar += numericChar) : "" ;
  settings.special ? (includedChar += specialChar) : "" ;
  if (includedChar === "") {
    alert("You must select at least one character.");
  } else {
    let password = "";
    for (let i = 0; i < settings.range; i++) {
      password += includedChar.charAt(
        Math.floor(Math.random() * includedChar.length)
      );
    }
    return password;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Input Slider 
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}