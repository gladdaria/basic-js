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
  const arr = str.split('');
  let result = '';
  
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    while(arr[i] === arr[i + 1]) {
      count++;
      i++
    }
    if (count !== 1) {
      result = `${result}${count}${arr[i]}`;
    } else {
      result = `${result}${arr[i]}`;
    }
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
