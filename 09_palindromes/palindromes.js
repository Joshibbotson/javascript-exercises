const palindromes = function (str) {
  
    str = str.toLowerCase().replace(/[&\/\\#, +()$~%.'":*!?<>{}]/g, "");
    const inputLength = str.length;
      for (let i =0; i < inputLength; i++) {
      if (str[i] !== str[inputLength - 1 - i]) {
        return false
      }
      }
      return true;
  }
  palindromes('Animal loots foliated detail of stool lamina.');
// Do not edit below this line
module.exports = palindromes;
