// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let output = ""
    let alphaOriginal = "abcdefghijklmnopqrstuvwxyz"
    let lowerCaseInput = input.toLowerCase()
    let alphaSet = new Set(alphabet)
    if(!alphabet || alphabet.length != 26 || alphaSet.size != 26) {
      return false;
    }
    if(encode === true) {
    for (let i = 0; i < lowerCaseInput.length; i++) {
      let encodePosition = alphaOriginal.indexOf(lowerCaseInput[i]);
      let encodeLetter = ""
      if (encodePosition === -1) {
        encodeLetter = lowerCaseInput[i]
    } else {
      encodeLetter = alphabet[encodePosition]
    }
    output += encodeLetter
  } 
}

if(encode === false) {
  for (let i = 0; i < lowerCaseInput.length; i++) {
    let decodePosition = alphabet.indexOf(lowerCaseInput[i]);
    let decodeLetter = ""
    if (decodePosition === -1) {
      decodeLetter = lowerCaseInput[i]
      } else {
      decodeLetter = alphaOriginal[decodePosition]
      }
      output += decodeLetter
    }
  }
  return output
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
