function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;

  return someRecursive(arr.slice(1), cb);
};

module.exports = { someRecursive };