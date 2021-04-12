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
  let biggest = 0;
  let strArr = [...(`${n}`)];
  let current = 0;
  for (let i = 0; i <= strArr.length; i++) {
    strArr = [...(`${n}`)];
    strArr.splice(i, 1);
    current = +strArr.join('');
    if (current > biggest && current !== n) {
      biggest = current;
    }
  }

  return biggest;
}

module.exports = deleteDigit;
