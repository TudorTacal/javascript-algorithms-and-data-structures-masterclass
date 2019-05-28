function areThereDuplicates(...args) {
  // sorting the array will take us out of O(n) realm
  // but still
  args.sort();
  let i = 0;
  for (let arg of args) {
    if (arg === args[i+1]) return true;
    i++;
  }
  return false;
};

module.exports.default = areThereDuplicates;