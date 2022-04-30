const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let stringToReturn = str + "";
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 0;
  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let addition = options.hasOwnProperty('addition') ? options.addition : '';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 0;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  let fulAddition = addition;
  
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    fulAddition += additionSeparator + addition;
  }
  
  stringToReturn += fulAddition
  
  for (let i = 0; i < repeatTimes - 1; i++) {
    stringToReturn += separator + str + fulAddition;
  }
  
  return stringToReturn;
}

module.exports = {
  repeater
};
