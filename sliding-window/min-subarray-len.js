function minSubArrayLen(arr, num) {
  // [2,3,1,2,4,3], 7) 2
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num) {
      total += arr[end];
      end++;
    }
    else if (total >= num) {
      minLen = Math.min(minLen, end-start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

module.exports.default = minSubArrayLen;
