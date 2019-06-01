function isSubsequence(str1, str2) {
  // use a while loop and we start with the first string so that we avoid iterating the whoel str2 because str1 < str2
  // take 2 pointers i str1 and j str2
  // take str1[0] and compare with str2[0]
  // if match then increase i, j
  // if not increase j; the order is preserved
  // return true if i + 1 === str1.length or at the end of the while loop
  let i = 0;
  let j = 0;
  let match = false;
  let length = str2.length - 1;
  let allChars;

  while (j < length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
    allChars = i + 1;
    if (foundSubsequence(allChars, str1)) {
      match = true;
      break;
    }
  }
  return match;
}

const foundSubsequence = (charsCounter, str) => charsCounter === str.length

module.exports.default = isSubsequence;
