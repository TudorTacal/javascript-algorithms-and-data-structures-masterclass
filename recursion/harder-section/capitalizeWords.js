let result = [];
function capitalizeWords(arr) {
  if (arr.length === 0) return result;
  result.push(arr[0].toUpperCase());
  return capitalizeWords(arr.slice(1));
};

module.exports = { capitalizeWords };