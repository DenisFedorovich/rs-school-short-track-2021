/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  const newString = string.split('');
  const min = Math.min.apply(null, newString);
  for (let i = 0; i < newString.length; i++) {
    if (+newString[i] === min) {
      newString.splice(i, 1);
    }
  }
  const result = newString.join('');
  return +result;
}

module.exports = deleteDigit;
