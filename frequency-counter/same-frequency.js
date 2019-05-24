function sameFrequency(int1, int2) {
  // map objects from int1 and int2
  // map on o1 and compare the keys and values with o2
  let o1 = countAndCreateObj(int1.toString());
  let o2 = countAndCreateObj(int2.toString());
  for (let key of Object.keys(o1)) {
    if (!o2[key]) return false;
    if (o1[key] !== o2[key]) return false;
  }
  return true;
}

function countAndCreateObj(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
  }
  return obj;
}

// O(n) time

module.exports.default = sameFrequency;