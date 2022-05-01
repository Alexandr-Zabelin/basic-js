const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type) {
    this.type = type == undefined ? true : type;
  }

  encrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error('Incorrect arguments!');

    let res = [];
    str = str.toUpperCase();
    key = key.padEnd(str.length, key).toUpperCase();
    let k=0;

    for(let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        res += String.fromCharCode((str.charCodeAt(i) + key.charCodeAt(k))%26 + 65);
        k++;
      }
      else {
        res +=str[i];
      }
    }

    if (!this.type) return res.split('').reverse().join('');
    return res;
  }
  
  decrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error('Incorrect arguments!');

    let res = [];
    str = str.toUpperCase();
    key = key.padEnd(str.length, key).toUpperCase();
    let k=0;

    for(let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        res += String.fromCharCode((str.charCodeAt(i) - key.charCodeAt(k) + 26)%26 + 65);
        k++;
      }
      else {
        res +=str[i];
      }
    }

    if (!this.type) return res.split('').reverse().join('');
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
