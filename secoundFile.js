class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  num_maxProfit(prices) {
    let min_so_far = 10000;
    let num_max = 0;
    let i = 0;
    while (i < prices.length) {
      if (prices[i] < min_so_far) {
        min_so_far = prices[i];
      }
      let newValue = prices[i] - min_so_far;
      if (newValue > num_max) {
        num_max = newValue;
      }
      i++;
    }
    return num_max;
  }
}
