var longestOnes = function (nums, k) {
  let left = 0;
  let maxCount = 0;
  let zerosCounter = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zerosCounter++;
    while (zerosCounter > k) {
      if (nums[left] === 0) {
        zerosCounter--;
      }
      left++;
    }
    if (right - left + 1 > maxCount) {
      maxCount = right - left + 1;
    }
  }
  return maxCount;
};
