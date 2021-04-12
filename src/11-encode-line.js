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
// eslint-disable-next-line consistent-return
function countLetters (arr, index) {
  let count = 0;
  for (let i = index; i <= arr.length; i++) {
    if (arr[i] === arr[index]) {
      count++;
    }
  }
  return count;
}
function encodeLine(str) {
  const arr = [...str];
  const res = [];
  let prev = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== prev) {
      prev = arr[i];
      if (arr[i] === arr[i + 1]) {
        const lettersNum = countLetters(arr, i);
        res.push(`${lettersNum}${arr[i]}`);
      } else {
        res.push(arr[i]);
      }
    }
  }
  return res.join('');
}

module.exports = encodeLine;
