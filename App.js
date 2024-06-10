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

 
}


