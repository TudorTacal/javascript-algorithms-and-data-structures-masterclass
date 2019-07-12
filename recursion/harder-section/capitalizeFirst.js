let result = [];
function capitalizeFirst(arr) {
  if (arr.length === 0) return result;

  let firstLetter = arr[0][0].toUpperCase();
  result.push(firstLetter + arr[0].slice(1));

  return capitalizeFirst(arr.slice(1));
};

module.exports = { capitalizeFirst };