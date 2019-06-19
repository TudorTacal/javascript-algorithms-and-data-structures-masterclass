function findLongestSubstring(str) {
  let longestSubstr = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    seen[char] = i + 1;
    longestSubstr = Math.max(longestSubstr, i - start + 1);
  }

  return longestSubstr;
}

module.exports.default = findLongestSubstring;