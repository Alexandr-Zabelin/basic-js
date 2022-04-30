const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let copyArr = arr.slice(0);
  let newArr = []; 
  let commands = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  for (let i = 0; i < copyArr.length; i++) {
    let ind = commands.indexOf(copyArr[i]);

    switch (ind) {
      case 0: {
        if (i + 1 < copyArr.length) {
          copyArr[i + 1] = null;
        }
        break;
      }
      case 2: {
        if (i + 1 < copyArr.length) {
          newArr.push(copyArr[i + 1]);
        }
        break;
      }
      case 3: {
        if (i != 0 && copyArr[i - 1] !== null) {
          newArr.push(copyArr[i - 1]);
        }
        break;
      }
      default: {
        if (copyArr[i] !== null &&  copyArr[i] != "--discard-prev" && (i + 1 >= copyArr.length || copyArr[i + 1] !== "--discard-prev")) {
          newArr.push(copyArr[i]);
        }
      }
    }
  }

  return newArr;
}

module.exports = {
  transform
};
