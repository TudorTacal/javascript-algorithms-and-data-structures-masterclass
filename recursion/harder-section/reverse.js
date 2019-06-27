function reverse(str) {
  if (str.length === 1) return str;

  let length = str.length - 1;
  let lastChar = str[length];
  let allButLastChar = str.slice(0, length);

  return lastChar + reverse(allButLastChar);
};

module.exports = { reverse };