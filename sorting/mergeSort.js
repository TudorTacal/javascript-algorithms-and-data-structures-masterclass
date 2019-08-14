function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
let result = [];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let arr1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let arr2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(arr1, arr2);
};

module.exports = {
  mergeSort,
  merge,
};