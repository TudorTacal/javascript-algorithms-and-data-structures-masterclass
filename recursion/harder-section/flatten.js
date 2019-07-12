function flatten(arr) {
  let result = [];
  arr.forEach(el => {
    if (Number.isInteger(el)) result.push(el);
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    }
  });
  return result;
};

module.exports = { flatten };