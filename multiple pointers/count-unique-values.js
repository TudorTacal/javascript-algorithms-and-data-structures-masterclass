function countUniqueValues(values) {
  // the array is ordered
  // create a i pointer and j = i + 1 pointer
  // iterate once through the array
  // compare i with j
  // if v[i] !== v[j] increase i, j and place v[j] at index i
  // return i + 1;
  if (values.length === 0) return 0;
  let i = 0, j = 0;
  while(true) {
    if (values[i] === values[j]) {
      j++;
    } else if (j === values.length) {
      return i + 1;
    }
    else {
      i++;
      values.splice(i, 1, values[j]);
      j++;
    }
  }
};

module.exports.default = countUniqueValues;

