function quickSort(arr) {
}

// return the index of where the element should be in the sorted array
function pivot(arr, start=0, end=arr.length+1) {
  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}


module.exports = {
  quickSort,
  pivot
};