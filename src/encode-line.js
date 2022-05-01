const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "" || str === null) {
    return "";
  }

  let strToReturn = "";
  let curSymbol = str[0];
  let curSymbolCounter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === curSymbol) {
      curSymbolCounter++;
    } else {
      strToReturn += curSymbolCounter !== 1 ? curSymbolCounter + curSymbol : curSymbol;

      curSymbol = str[i];
      curSymbolCounter = 1;
    }
  }

  strToReturn += curSymbolCounter !== 1 ? curSymbolCounter + curSymbol : curSymbol;

  return strToReturn;
}

module.exports = {
  encodeLine
};
