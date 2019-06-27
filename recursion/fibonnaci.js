function fibonnaci(num) {
  if (num <= 2) return 1;
  return fibonnaci(num - 1) + fibonnaci(num - 2);
}

module.exports = { fibonnaci };

