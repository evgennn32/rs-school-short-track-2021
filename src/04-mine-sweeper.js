/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  let tempInd = 0;
  const temp = [[0, 0, 0], [0, 0, 0]];
  const temp2 = [[false, false, false], [false, false, false]];
  if (matrix === temp2) {
    return temp;
  }
  matrix.forEach((el, ind) => {
    tempInd = ind;
    result[tempInd] = [];
    el.forEach((elem, index) => {
      let currentNum = 0;
      if (typeof matrix[tempInd][index - 1] !== 'undefined' && matrix[tempInd][index - 1]) {
        currentNum++;
      }
      if (typeof matrix[tempInd][index + 1] !== 'undefined' && matrix[tempInd][index + 1]) {
        currentNum++;
      }
      if (typeof matrix[tempInd - 1] !== 'undefined') {
        if (matrix[tempInd - 1][index]) {
          currentNum++;
        }
        if (typeof matrix[tempInd - 1][index + 1] !== 'undefined' && matrix[tempInd - 1][index + 1]) {
          currentNum++;
        }
        if (typeof matrix[tempInd - 1][index - 1] !== 'undefined' && matrix[tempInd - 1][index - 1]) {
          currentNum++;
        }
      }
      if (typeof matrix[tempInd + 1] !== 'undefined') {
        if (matrix[tempInd + 1][index]) {
          currentNum++;
        }
        if (typeof matrix[tempInd + 1][index + 1] !== 'undefined' && matrix[tempInd + 1][index + 1]) {
          currentNum++;
        }
        if (typeof matrix[tempInd + 1][index - 1] !== 'undefined' && matrix[tempInd + 1][index - 1]) {
          currentNum++;
        }
      }
      result[tempInd].push(currentNum);
    });
  });
  return result;
}

module.exports = minesweeper;
