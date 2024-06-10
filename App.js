class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.placeNodeAtRightPosition(newNode, this.root);
    }
  }

  placeNodeAtRightPosition(newNode, rootNode) {
    if (newNode.key < rootNode.key) {
      if (!rootNode.left) {
        rootNode.left = newNode;
      } else {
        this.placeNodeAtRightPosition(newNode, rootNode.left);
      }
    } else {
      if (!rootNode.right) {
        rootNode.right = newNode;
      } else {
        this.placeNodeAtRightPosition(newNode, rootNode.right);
      }
    }
  }

  // In-order traversal to verify the BST properties
  inOrderTraversal(node, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Helper function to build tree string with proper brackets
  buildTreeString(node) {
    if (!node) {
      return "";
    }
    let leftStr = this.buildTreeString(node.left);
    let rightStr = this.buildTreeString(node.right);
    return `${node.key}${
      leftStr || rightStr ? `(${leftStr},${rightStr})` : ""
    }`;
  }

  // Print the tree structure
  printTree() {
    const treeString = this.buildTreeString(this.root);
    console.log(treeString);
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
      console.log("node check2",node)

      return node;
    } else {
      // Node to be deleted is found and it's a leaf node
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let tempNode = this.findMinNode(node.right);
      node.key = tempNode.key;
      node.right = this.deleteNode(node.right, tempNode.key);
      return node
    }
  }
  findMinNode(node) {
    while (node.left!==null) {
      node = node.left;
    }
    return node;
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(15);
bst.insertNode(3);
bst.insertNode(7);
bst.insertNode(12);
bst.printTree();

bst.delete(17);

// Print the tree structure
bst.printTree();

// Verify the tree with in-order traversal
const inOrderResult = bst.inOrderTraversal(bst.root);
console.log("In-order Traversal Result:", inOrderResult);
