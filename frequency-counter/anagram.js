function anagram(str1, str2) {
  // create an object with str1 chars
  // create an object with str2 chars
  // iterate through o1 and compare the values and frequency with o2
  // an anagram must have the same length, same chars, same frequency
  if (str1.length !== str2.length) return false;
  let o1 = {};
  let o2 = {};

  for (i of str1) {
    o1[i] ? o1[i]++ : o1[i] = 1;
  }
  for (i of str2) {
    o2[i] ? o2[i]++ : o2[i] = 1;
  }

  for (key of Object.keys(o1)) {
    if (!o2.hasOwnProperty(key)) return false;
    if (o1[key] !== o2[key]) return false;
  }
  return true;
};

// TIME COMPLEXITY O(n) because we iterate 3 times without nested loops
// SPACE COMPLEXITY O(n) because we create 2 objects and 1 array witn n elements

module.exports.default = anagram;