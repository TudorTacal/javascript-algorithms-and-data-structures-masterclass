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

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return !!current;
  }

  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

module.exports = {
  BST: BinarySearchTree,
}

