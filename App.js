/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    let map = new Map();
    map.set(0, 1); // Initialize the map with the base case (0, 1)

    /**
     * Helper function to perform DFS and calculate path sums
     * @param {TreeNode} node - The current node in the binary tree
     * @param {number} currentSum - The running sum of the current path
     * @return {number} - The number of valid paths found
     */
    function dfs(node, currentSum) {
        if (!node) return 0;

        // Update the current sum by adding the current node's value
        currentSum += node.val;

        // Count paths that sum to targetSum by checking the map
        let count = map.get(currentSum - targetSum) || 0;

        // Update the map with the current sum
        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        // Recursively check the left and right subtrees
        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        // Backtrack by decrementing the count of the current sum in the map
        map.set(currentSum, map.get(currentSum) - 1);

        return count;
    }

    // Start DFS with an initial sum of 0
    return dfs(root, 0);
};
