/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ = 0;
  let curInd = 0;
  matrix.forEach((el, ind) => {
    curInd = ind;
    el.forEach((el1, ind1) => {
      if (curInd === 0) {
        summ += el1;
      } else if (curInd !== 0 && matrix[curInd - 1][ind1] !== 0) summ += el1;
    });
  });
  return summ;
}

module.exports = getMatrixElementsSum;
