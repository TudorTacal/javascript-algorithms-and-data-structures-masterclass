const maxSubArraySum = require('./max-subarray-sum').default;

test('maxSubArraySum', () => {
  expect(maxSubArraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
  expect(maxSubArraySum([1,2,5,2,8,1,4], 4)).toEqual(17);
  expect(maxSubArraySum([4,2,1,6], 1)).toEqual(6);
  // expect(maxSubArraySum((4,2,1,6,2), 4)).toEqual(13);
  // expect(maxSubArraySum([], 4)).toEqual(null);
});