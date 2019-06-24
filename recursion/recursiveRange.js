function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(--num);
}

module.exports = { recursiveRange };