function stringifyNumbers(obj) {
  let result = {};
  Object.keys(obj).forEach(key => {
    if (Number.isInteger(obj[key])) {
     result[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && obj[key].constructor === Object) {
      result = {
        ...result,
        [key]: {...stringifyNumbers(obj[key])},
      };
    } else {
      result[key] = obj[key];
    }
  });
  return result;
};

module.exports = { stringifyNumbers };