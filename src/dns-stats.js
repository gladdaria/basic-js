const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArr = [];
  let arr = [];
  const resultObj ={};

  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    for (let j = 0; j < arr.length; j++) {
      if(j === 0) {
         arr[j] = `.${arr[j]}`;
      } else {
        arr[j] = `${arr[j - 1]}.${arr[j]}`
      }
    }
    newArr.push(arr)
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      let key = newArr[i][j]
    if(key in resultObj){
        resultObj[key] += 1;
      } else {
        resultObj[key] = 1;
      }
    }
  }
  return resultObj;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
