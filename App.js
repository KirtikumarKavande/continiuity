var maxDepth = function (root) {
  // Base case: if the root is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The maximum depth is the larger of the two subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
};