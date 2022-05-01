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
  let objToReturn = {};
  
  domains.forEach((domain) => {
    domain
      .split(".")
      .reverse()
      .reduce((accumulator, current) => {
        accumulator += "." + current;

        objToReturn[accumulator] = objToReturn.hasOwnProperty(accumulator) ? objToReturn[accumulator] + 1 : 1;

        return accumulator;
      }, "");
  });

  /* domains.forEach((domain) => {
    let currentDomain = "";

    domain.split(".").reverse().forEach((partOfDomain) => {
      currentDomain += "." + partOfDomain;

      objToReturn[currentDomain] = objToReturn.hasOwnProperty(currentDomain) ? objToReturn[currentDomain] + 1 : 1;
    }); 
    
  });
 */
  return objToReturn;
}

module.exports = {
  getDNSStats
};
