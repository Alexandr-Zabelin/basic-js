const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  if (n.split("").filter((value) => value == "-").length != 5) {
    return false;
  }

  let arr = n.split("-");
  let alphabet = "ABCDEF0123456789";

  if (arr.length != 6) {
    return false;
  }

  for (let element of arr)
  {
    if (element.length != 2) {
      return false;
    }

    for (let char of element) {
      if (!alphabet.includes(char)) {
        return false;
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
