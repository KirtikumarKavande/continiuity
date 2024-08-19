// Define the TreeNode class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Test Case 1: Basic zigzag pattern
const root1 = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3)
);

console.log(longestZigZag(root1)); // Output should be 3

// Test Case 2: Single node tree
const root2 = new TreeNode(1);

console.log(longestZigZag(root2)); // Output should be 0

// Test Case 3: All nodes only left children
const root3 = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3,
      new TreeNode(4)
    )
  )
);

console.log(longestZigZag(root3)); // Output should be 1

// Test Case 4: All nodes only right children
const root4 = new TreeNode(1,
  null,
  new TreeNode(2,
    null,
    new TreeNode(3,
      null,
      new TreeNode(4)
    )
  )
);

console.log(longestZigZag(root4)); // Output should be 1

// Test Case 5: Complex zigzag tree
const root5 = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3),
    new TreeNode(4,
      null,
      new TreeNode(5,
        new TreeNode(6)
      )
    )
  ),
  new TreeNode(7)
);

console.log(longestZigZag(root5)); // Output should be 4

// Test Case 6: No Zigzag path, tree is symmetric
const root6 = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3,
    new TreeNode(6),
    new TreeNode(7)
  )
);

console.log(longestZigZag(root6)); // Output should be 1

// Test Case 7: Larger zigzag tree
const root7 = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3,
      new TreeNode(4,
        new TreeNode(5)
      )
    )
  ),
  new TreeNode(6,
    null,
    new TreeNode(7,
      new TreeNode(8,
        null,
        new TreeNode(9)
      )
    )
  )
);

console.log(longestZigZag(root7)); // Output should be 4
