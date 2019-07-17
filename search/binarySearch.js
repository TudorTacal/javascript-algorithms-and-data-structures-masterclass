function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return arr.indexOf(arr[mid]);
    } else if (val > arr[mid]) {
      left++;
    } else if (val < arr[mid]) {
      right--;
    } else {
      break;
    }
  }
  return -1;
};

module.exports.default = binarySearch;