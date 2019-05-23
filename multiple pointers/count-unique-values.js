function countUniqueValues(values) {
  // the array is ordered
  // create a i pointer and j = i + 1 pointer
  // iterate once through the array
  // compare i with j
  // if i !== j increase the counter
  // return counter
  if (values.length === 0) return 0;

  let j, counter = 0;
  for (let i = 0; i < values.length; i++) {
    j = i + 1;
    if (values[i] !== values[j]) counter++;
  }
  return counter;
};

module.exports.default = countUniqueValues;

