/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let string = n.toString().split('');
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += +string[i];
  }
  const func = (str) => {
    count = 0;
    for (let i = 0; i < str.length; i++) {
      count += +str[i];
    }
    return str;
  };
  while (string.length > 1) {
    func(string);
    string = count.toString().split('');
  } return +string;
}

module.exports = getSumOfDigits;
