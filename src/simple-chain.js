const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value += "";

    this.chain.push(value);

    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || !Number.isInteger(position) || position <= 0 || position > this.getLength()) {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);

      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let stringToReturn = `( ${this.chain[0]} )`;

    for (let i = 1; i < this.getLength(); i++) {
      stringToReturn += `~~( ${this.chain[i]} )`;
    }

    this.chain = [];

    return stringToReturn;
  }
};

module.exports = {
  chainMaker
};
