/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let bag = 0;
  let max = nums[0];
  for (i = 0; i < nums.length; i++) {
    bag = bag + nums[i];
    if (bag > max) {
      max = bag;
    }
    if (bag < 0) {
      bag = 0;
    }
  }
  return max;
}
