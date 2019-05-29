function averagePair(integers, average) {
  // iterate thorugh the array
  // take 2 pointers, 1 at beginning, 1 at the end
  // if i + j / 2 > average decrease j
  // else increase i
  let i = 0, j = integers.length - 1;
  for (let k = 0; k < integers.length; k++) {
    if ((integers[i] + integers[j]) / 2 > average) {
      j--;
    } else if ((integers[i] + integers[j]) / 2 < average) {
      i++;
    } else {
      return true;
    }
  }
  return false;

}

module.exports.default = averagePair;