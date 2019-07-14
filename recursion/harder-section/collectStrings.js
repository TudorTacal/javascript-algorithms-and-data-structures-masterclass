function collectStrings(obj) {
  let result = [];
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else {
      result = result.concat(collectStrings(obj[key]));
    }
  });
  return result;
};

module.exports = { collectStrings };