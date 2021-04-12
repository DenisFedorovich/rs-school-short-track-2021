/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const mail = email.split('');
  const arr = [];
  for (let i = mail.length; i > 1; i--) {
    if (mail[i] === '@') {
      for (let j = i + 1; j < mail.length; j++) {
        arr.push(mail[j]);
      }
      break;
    }
  }
  return arr.join('');
}

module.exports = getEmailDomain;
