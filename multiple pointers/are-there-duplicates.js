function areThereDuplicates(...args) {
  // sorting the array will take us out of O(n) realm
  //  check if an element is equal with the element at the next position
  return args.sort().some((el, index) => el === args[index+1]);
};

module.exports.default = areThereDuplicates;