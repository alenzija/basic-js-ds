const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(head=null){
    this.head = head;
  }

  root() {
    return this.head
  }

  add(data) {
    this.head = addWithin(this.head,data);

    function addWithin(node, data){
      if(!node) {
        return new Node(data);
      } else if(node.data>data){
        node.left = addWithin(node.left, data)
      } else if(node.data<data){
        node.right = addWithin(node.right, data)
      } 
      return node;
    }
  }

  has(data) {
    return hasData(this.head, data);

    function hasData(node, data){
      if(!node) return false;
      if(node.data === data) return true;
      if(node.data > data) return hasData(node.left, data);
      if(node.data < data) return hasData(node.right, data);
    }
  }

  find(data) {
    return findData(this.head, data);
    function findData(node, data){
      if(!node) return null;
      if(node.data === data) return node;
      if(node.data > data) return findData(node.left, data);
      if(node.data < data) return findData(node.right, data);
    }
  }

  remove(data) {
    this.head=removeData(this.head, data);

    function removeData(node,data){
     // console.warn('>>', {self: this})    
     // debugger;
      if (!node) return null;
      if(node.data === data){
        if(!node.left && !node.right){
          return null
      
        }
        if (!node.left && node.right){
          node = node.right;
          return node;
        }
        if(!node.right && node.left){
          node = node.left;
          return node;
        }
        if (node.left && node.right){
          let min = node.right.data;
          let current = node.right;
          while(current.left) {
            current = current.left;
            min=current.data;
          }
          node.data = min;
          node.right = removeData(node.right, min);
        }
      } else if(node.data>data){
        node.left = removeData(node.left, data);
      } else if(node.data<data) {
        node.right = removeData(node.right, data);
      }
      return node;
    }
  }

  min() {
    if(!this.head) return null;
    let current = this.head;
    while(current.left){
      current = current.left
    }
    return current.data
  }

  max() {
    debugger
    if(!this.head) return null;
    let current = this.head;
    while(current.right){
      current = current.right
    }
    return current.data
  }
}



module.exports = {
  BinarySearchTree
};