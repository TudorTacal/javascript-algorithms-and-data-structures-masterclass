function nestedEvenSum(obj) {
  let sum = 0;
  Object.keys(obj).forEach(key => {
    if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) sum += obj[key];
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  });
  return sum;
};

module.exports = { nestedEvenSum };