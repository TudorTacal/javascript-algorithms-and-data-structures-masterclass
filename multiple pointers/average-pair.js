function averagePair(integers, average) {
  // iterate thorough integers
  // add every integer with the next
  // calculate the average
  // compare it to the given average
  // return true if we find one
  if (integers.some((int, index) => checkAverage(integers, int, average, index, 1))) return true;
  if (integers.some((int, index) => checkAverage(integers, int, average, index, 2))) return true;
  return false;
}

const checkAverage = (integers, int, average, index, increment) =>
  int + integers[index+increment] / 2 === average


module.exports.default = averagePair;