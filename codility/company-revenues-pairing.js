/*
  A company has a list of expected revenues and payments for the upcoming year in chronological order.
  The problem is that at some moments in time the sum of previous payments can be larger
  thanb the total previous revenue. This would put the company in debt. To avoid this problem the 
  company takes a very simple approach. It reschedules some expenses to the end of the year.

  You are given an array of integers, where positive numbers represent revenues and negative numbers represent expenses, all in chronological order.
  In one move you can relocate any expense (negative number) to the end of the array. What is the minimum number of such relocations to make sure that the company never falls into debt?
  
  In other words: you need to make sure that there is no consecutive sequence of elements starting from the beginning of the array, that sums up to a negative number.

  You can assume that the sum of all elements in A is nonnegative.

  Write a function:

    function solution(A);

  that, given an array A of N integers, returns the minimum number of relocations, so that company never falls into debt.

  Examples:

  1. Given A = [10, -10, -1, -1, 1, 10], the function should return 1. It is enough to move -10 to the end of the array.

  2. Given A = [-1, -1, -1, 1, 1, 1, 1] the function should return 3. The negative elements at the beginning must be moved to the end to avoid debt at the start of the year.
  
  3. Given A = [5, -2, -3, 1] the function should return 0. The company balance is always nonnegative.

  Write an efficient algorithm for the following assumptions:

  - N is an interger within the range [1..100,000];
  - each element of array A is an integer within the range [-1,000,000,000..1,000,000,000];
  - sum of all elements in A is greater than or equal to 0
*/

const companyRevenues = (arr) => {
  // [10, -10, -1, -1, 1, 10]
  // [10, -1, -1, 1, 10, -10]
  // iterate
  // sum
  // if condition is met
  // move the most negative number from the sequence to the end of the array
  let sum = 0;
  let maxNegative;
  let rotations = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      // find maxNegative number in the array up to index 2
      // index 2
      const slice = arr.slice(0, i + 1);
      maxNegative = slice[0];
      for (let j = 1; j < slice.length; j++) {
        maxNegative = maxNegative < slice[j] ? maxNegative : slice[j];
      }
      // move the maxNegative number at the end of the array

      arr.push(maxNegative);
      // [10, -10, -1, -1, 1, 10, -10]
      arr.splice();
      rotations++;
      break;
    }
  }
  return rotations;
};

module.exports = {
  default: companyRevenues,
};
