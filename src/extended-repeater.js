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
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let addition= options.addition !== undefined ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let substr = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    substr = `${substr}${additionSeparator}${addition}`;
  }
  substr = substr.slice(additionSeparator.length);
  
 let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result = `${result}${separator}${str}${substr}`;
  }
  return result.slice(separator.length);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
