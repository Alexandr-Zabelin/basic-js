const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = "";

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((name) => {
    if (typeof name === "string") {
      name = name.trim();

      letters += name[0].toUpperCase();
    }
  })

  if (letters.length === 0) {
    return false;
  } else {
    let lettersArr = letters.split("");

    lettersArr.sort((char1, char2) => char1.localeCompare(char2));
    
    letters = lettersArr.join("");
    return letters;
  }
}

module.exports = {
  createDreamTeam
};
