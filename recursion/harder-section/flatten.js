function flatten(arr) {
  let result = [];
  arr.forEach((el) => {
    if (Number.isInteger(el)) result.push(el);
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    }
  });
  return result;
}

module.exports = { flatten };

// iterative solution
function flattenIteratively(arr) {
  var i = 0;

  if (!Array.isArray(arr)) {
    /* return non-array inputs immediately to avoid errors */
    return arr;
  }

  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i++;
    }
  }
  return arr;
}
