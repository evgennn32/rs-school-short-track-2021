/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const results = arr.filter((item) => (item === -1 ? '' : true));
  results.sort((a, b) => a - b);
  const sortedArr = [];
  let tmpInd = 0;
  arr.forEach((el) => {
    if (el !== -1) {
      sortedArr.push(results[tmpInd]);
      tmpInd++;
    } else {
      sortedArr.push(-1);
    }
  });
  return sortedArr;
}

module.exports = sortByHeight;
