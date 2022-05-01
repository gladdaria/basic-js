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
  let i = 1;
  let prevNum = 0;
  let maxNum = 0
  while(Math.floor(n / i) > 0) {
    let tempNum = Math.floor(n / (i * 10)) * i + (n % i);
    i = i * 10;
    prevNum = Math.max(prevNum, tempNum);
  }
  maxNum = prevNum;
  return maxNum;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
