function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

module.exports = { productOfArray };

// 1 * productOfArray([2, 3]); 1 * 6
 // 2 * productOfArray([3]); 2 * 3
  // 3 * 1; returns 3