function findLongestSubstring(str) {
  let longestSubstring = 0;
  let index = 0;
  let fromIndex = 0;
  let substr = '';
  let indexOf;
  let char;

  while (index < str.length) {
    char = str[index];
    indexOf = str.indexOf(char, fromIndex);

    if (indexOf >= index) {
      substr += char;
      index++;
    } else {
      substr = '';
      index = indexOf + 1;
      fromIndex = index;
    };
    longestSubstring = Math.max(longestSubstring, substr.length);
  }

  return longestSubstring;
}

module.exports.default = findLongestSubstring;