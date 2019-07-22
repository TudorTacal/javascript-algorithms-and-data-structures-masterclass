function naiveStringSearch(str, substr) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let found = '';
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] === substr[j]) {
        found += str[i + j];
      } else {
        break;
      }
    }
    if (found === substr) counter++;
  }
  return counter;
};

module.exports.default = naiveStringSearch;