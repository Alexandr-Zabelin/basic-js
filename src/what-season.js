const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  } else if (!(date instanceof Date) || typeof date !== "object" || !(Date.prototype.isPrototypeOf(date))) {
    throw new Error ("Invalid date!");
  }

  try {
    date.toDateString();
  } catch {
    throw new Error ("Invalid date!");
  }

  let month = date.getMonth();
  
  if (month == 0 || month == 1 || month == 11) {
    return "winter";
  } else if (month == 2 || month == 3 || month == 4) {
    return "spring";
  } else if (month == 5 || month == 6 || month == 7) {
    return "summer";
  } else if (month == 8 || month == 9 || month == 10) {
    return "fall";
  }
}

module.exports = {
  getSeason
};
