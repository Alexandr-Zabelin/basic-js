const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n += "";
  n = n.split("");
  
  let digits = n.map(digit => parseInt(digit));
  let indMax = digits.lastIndexOf(Math.max(...digits));
  let indMin = digits.indexOf(Math.min(...digits));

  if (indMax < 1) {
    digits.splice(indMin, 1);
  } else {
    digits.splice(indMax - 1, 1);
  }

  return parseInt(digits.join(""));
}

module.exports = {
  deleteDigit
};
