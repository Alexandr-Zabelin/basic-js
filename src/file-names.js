const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let howMany = (arr, finishIndex, element) => {
    let counter = 0;

    for (let i = 0; i < finishIndex; i++) {
      if (arr[i] === element) {
        counter++;
      }
    }

    return counter;
  }

  let arrToReturn = []
  let count = 0;

  for (let i = 0; i < names.length; i++) {
    let strToPush = names[i];
    count = Math.max(howMany(names, i, strToPush), howMany(arrToReturn, i, strToPush));

    while (count !== 0) {
      strToPush += `(${count})`;

      count = Math.max(howMany(names, i, strToPush), howMany(arrToReturn, i, strToPush));
    }

    arrToReturn.push(strToPush);
  }

  return arrToReturn;
}

module.exports = {
  renameFiles
};
