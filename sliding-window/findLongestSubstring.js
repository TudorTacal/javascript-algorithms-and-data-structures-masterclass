function findLongestSubstring(str) {
  let longestSubstring = 0;
  let index = 0;
  let substr = "";
  let indexOf;
  let fromIndex = 0;
  let char;
  // 'longestsubstring'
  while (true) {
    char = str[index];
    indexOf = str.indexOf(char, fromIndex);
    if (indexOf === -1) {
      break;
    } else if (indexOf >= index) {
      substr += char;
      index++;
    } else {
      longestSubstring = Math.max(longestSubstring, substr.length);
      substr = "";
      index = indexOf + 1;
      fromIndex = index;
    };
    console.log(fromIndex, 'fromIndex', char, 'indexOf', indexOf, 'index', index, substr, longestSubstring);
  }
  return longestSubstring;
}

module.exports.default = findLongestSubstring;