class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (node.value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          break;
        }
      }
      else if (node.value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          break;
        }
      } else {
        return undefined;
      }
    }
    return this;
  }
}

module.exports = {
  BST: BinarySearchTree,
}

