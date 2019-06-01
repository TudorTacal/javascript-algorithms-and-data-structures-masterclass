function maxSubArraySum(arr, num) {
  // create a sum variable (window) of num elements
  // iterate through the arr and slide that window until you've checked all sums
  // compare the current sum with next sum and pick max
  // assign the biggest sum to the sum variable
  // return sum
  if (arr.length < num) return null;

  let sum = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  temp = sum;
  for (let i = num; i < arr.length; i++) {
    // slide to create the next sum
    temp = temp - arr[i - num] + arr[i];
    sum = Math.max(sum, temp);
  }
  return sum;
}


module.exports.default = maxSubArraySum;
