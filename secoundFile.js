class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  moveZeros(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        i++;
      }
    }
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
    return nums;
  }
}
