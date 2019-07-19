function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (val > arr[mid]) {
      left = mid + 1;
    } else if (val < arr[mid]) {
      right = mid - 1;
    } else {
      break;
    }
  }
  return -1;
};

module.exports.default = binarySearch;