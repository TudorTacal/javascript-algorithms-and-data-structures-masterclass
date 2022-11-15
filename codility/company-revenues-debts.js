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

function solution(A) {
  // []
  let sum = 0;
  const max = { value: -Infinity, index: null, count: 0 };

  // convert this to a while loop
  while (sum <= 0) {
    console.log('insde while');
    let i = 0;
    const int = A[i];
    if (max.value <= int) {
      max.value = int;
      max.index = i;
    }
    sum += int;
    if (sum < 0) {
      A.splice(max.index, 1);
      A.push(max.value);
      max.count += 1;
      break;
    }
    i++;
  }
  return max.count;
}

module.exports.default = solution;
