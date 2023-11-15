/*eslint-disable*/

const caesarCipher = {
  alpahabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  shiftChars: function(str, num) {
    let array = str.split('');
    let newArray = this.adjustChars(array, num);
    return newArray.join('');
  },
  adjustChars: function(array, num) {
    return array.map((item) => {
      if (this.alpahabet.includes(item)) {
        return this.alpahabet[this.alpahabet.indexOf(item) + num <= 25 ? this.alpahabet.indexOf(item) + num : num - 1];
      } else {
        return item;
      }
    })
  }
}

module.exports = caesarCipher;