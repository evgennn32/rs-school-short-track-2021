/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  const temp = [];
  const arr1 = [...s1];
  const arr2 = [...s2];
  arr1.forEach((el) => {
    if (!temp.includes(el) && arr2.includes(el)) {
      const num1 = s1.split(el).length - 1;
      const num2 = s2.split(el).length - 1;
      const numberOfCommon = num1 < num2 ? num1 : num2;
      common += numberOfCommon;
    }
    temp.push(el);
  });
  return common;
}

module.exports = getCommonCharacterCount;
