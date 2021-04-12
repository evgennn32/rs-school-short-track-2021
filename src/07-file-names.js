/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameElements(elem, array) {
  let count = 0;
  const newArr = array.map((el) => {
    if (el === elem) {
      if (count === 0) {
        count++;
        return el;
      }
      // eslint-disable-next-line no-param-reassign
      count++;
      return `${el}(${count - 1})`;
    }
    return el;
  });

  return newArr;
}

function renameFiles(names) {
  const arrCopy = [...names];
  let res = [];
  names.forEach((el, ind) => {
    if (names.indexOf(el, ind + 1) !== -1) {
      res = renameElements(el, arrCopy);
      res = renameFiles(res);
    }
  });
  if (res.length === 0) {
    return names;
  }
  return res;
}

module.exports = renameFiles;
