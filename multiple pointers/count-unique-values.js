function countUniqueValues(values) {
  // the array is ordered
  // create a i pointer and j = i + 1 pointer
  // iterate once through the array
  // compare i with j
  // if v[i] !== v[j] increase i, j and place v[j] at index i
  // return i + 1;
  if (values.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < values.length; j++) {
    if (values[i] !== values[j]) {
      i++;
      values[i] = values[j];
    }
  }
  return i + 1;
};

module.exports.default = countUniqueValues;

