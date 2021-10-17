const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addNewNode(this.base, data);

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }
        return node;
    }
  }

  has(data) {
    return searchNode(this.base, data);

    function searchNode(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (data < node.data) {
        return searchNode(node.left, data);
      }
      if (data > node.data) {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.base, data);

    function findNode(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) {
        return findNode(node.left, data);
      }
      if (data > node.data) {
        return findNode(node.right, data);
      }
    }
  }
  
  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, data) {
      if (!node) return;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return;

        if (!node.left) {
          return node = node.right;
        }

        if (!node.right) {
          return node = node.left;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.base) return null;

    let minNode = this.base;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.base) return null;

    let maxNode = this.base;
    while (maxNode.right) {
      maxNode = maxNode.right
    }
    return maxNode.data;
  }
}