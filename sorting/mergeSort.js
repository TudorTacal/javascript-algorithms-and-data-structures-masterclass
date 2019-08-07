function merge(arr1, arr2) {
  console.log('calling merge');
  let result = [];
  let i = 0;
  let j = 0;

  while (true) {
    if (i >= arr1.length && j < arr2.length) {
      result.push(...arr2.slice(j));
      break;
    }

    if (j >= arr2.length && i < arr1.length) {
      result.push(...arr1.slice(i));
      break;
    }

    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }

    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
};

function mergeSort(arr) {
};

module.exports = {
  mergeSort,
  merge,
};