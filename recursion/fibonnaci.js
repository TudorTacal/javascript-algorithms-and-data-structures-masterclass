let result = [1, 1];
let i = 0;
function fibonnaci(num) {
  if (result.length === num) return;
  result.push(result[i] + result[i+1]);
  i++;
  fibonnaci(num);
  return result[num-1];
}

module.exports = { fibonnaci };


