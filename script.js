var longestZigZag = function(root) {
  let maxLength = 0;
  
  const dfs = (node, direction, length) => {
      if (!node) return;
      
      maxLength = Math.max(maxLength, length);
      
      if (direction === 'left') {
          dfs(node.right, 'right', length + 1);
          dfs(node.left, 'left', 1);
      } else {
          dfs(node.left, 'left', length + 1);
          dfs(node.right, 'right', 1);
      }
  }; 
  
  dfs(root.left, 'left', 1);
  dfs(root.right, 'right', 1);
  
  return maxLength;
};
