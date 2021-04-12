/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const string = str.split('');
  const arr = [];
  let sum = 1;
  for (let i = 0; i < string.length; i++) {
    while (string[i] === str[i + 1]) {
      sum++;
      i++;
    }
    if (sum > 1) {
      arr.push(sum);
      arr.push(string[i]);
      sum = 1;
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
