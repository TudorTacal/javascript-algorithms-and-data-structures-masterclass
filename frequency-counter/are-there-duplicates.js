function areThereDuplicates(...args) {
  if (args.length === 0) return 0;

  let o1 = {};
  // create the object
  args.forEach(arg => o1[arg] ? o1[arg]++ : o1[arg] = 1);
  // check if any key has a value greater than 1;
  for (let key of Object.keys(o1)) {
    if (o1[key] > 1) return true;
  }
  return false;
};

module.exports.default = areThereDuplicates;