'use strict';

class Node {
  constructor() {
    this.data = 0;
    this.left = null;
    this.right = null;
  }
}
function NewNode(data) {
  var temp = new Node();
  temp.data = data;
  temp.left = null;
  temp.right = null;
  return temp;
}
function insert(root, key) {
  if (root == null) return NewNode(key);
  if (key < root.data) root.left = insert(root.left, key);
  else root.right = insert(root.right, key);
  return root;
}
function findpairUtil(root, sum, set) {
  if (root == null) return false;
  if (findpairUtil(root.left, sum, set)) return true;
  if (set.has(sum - root.data)) {
    console.log('Pair is found (' + (sum - root.data) + ', ' + root.data + ')');
    return true;
  } else set.add(root.data);
  return findpairUtil(root.right, sum, set);
}
function findPair(root, sum) {
  var set = new Set();
  if (!findpairUtil(root, sum, set)) console.log('Pairs do not exit');
}
// Driver code
var root = null;
root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 8);
root = insert(root, 12);
root = insert(root, 16);
root = insert(root, 25);
root = insert(root, 10);
var sum = 28;
findPair(root, sum);

module.exports = {
  findPair,
  findpairUtil,
  Node,
  NewNode,
  insert,
};
