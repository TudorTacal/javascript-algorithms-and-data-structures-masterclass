function minSubArrayLen(arr, num) {
  let length;
  let tempSum = 0;
  let closestSum = Infinity;
  let result1 = Infinity;
  let result2 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      length = j - i + 1;
      tempSum += arr[j];
      if (tempSum === num && length < result1) {
        result1 = length
      } else if (tempSum > num && tempSum < closestSum && length < result2) {
        result2 = length;
      }
    }
    closestSum = Math.min(tempSum, closestSum);
    tempSum = 0;
  }
  if (result1 === Infinity && result2 === Infinity) return 0;
  return result1 <= result2 ? result1 : result2;
}

module.exports.default = minSubArrayLen;
