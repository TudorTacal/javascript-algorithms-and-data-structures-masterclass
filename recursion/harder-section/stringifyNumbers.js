function stringifyNumbers(obj) {
  Object.keys(obj).forEach(key => {
    if (Number.isInteger(obj[key])) obj[key] = obj[key].toString();
    if (typeof obj[key] === "object") {
      stringifyNumbers(obj[key]);
    }
  });
  return obj;
};

module.exports = { stringifyNumbers };