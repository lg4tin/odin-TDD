/*eslint-disable*/

function analyzeArray(array) {
  let obj = {};
  obj['average'] = array.reduce((a, b) => a + b) / array.length;
  obj['min'] = Math.min(...array);
  obj['max'] = Math.max(...array);
  obj['length'] = array.length;
  return obj;
}

module.exports = analyzeArray;