const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Stat = {};
  let s2Stat = {};
  let num = 0;

  for (let i = 0; i < s1.length; i++) {
    char = s1[i]

    if (s1Stat.hasOwnProperty(char)) {
      s1Stat[char] += 1;
    } else {
      s1Stat[char] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    char = s2[i]

    if (s2Stat.hasOwnProperty(char)) {
      s2Stat[char] += 1;
    } else {
      s2Stat[char] = 1;
    }
  }

  for (let char in s1Stat) {
    if (s2Stat.hasOwnProperty(char)) {
      num += Math.min(s1Stat[char], s2Stat[char]);
    }
  }

  return num;
}

module.exports = {
  getCommonCharacterCount
};
