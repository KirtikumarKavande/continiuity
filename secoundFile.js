class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  max_numProfit(prices) {
    let min_so_far = 10000;
    let max_num = 0;
    let i = 0;
    while (i < prices.length) {
      if (prices[i] < min_so_far) {
        min_so_far = prices[i];
      }
      let newValue = prices[i] - min_so_far;
      if (newValue > max_num) {
        max_num = newValue;
      }
      i++;
    }
    return max_num;
  }
}
