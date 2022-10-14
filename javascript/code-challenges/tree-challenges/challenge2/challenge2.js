'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function bftTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.value !== q.value) return false;
  return bftTree(p.left, q.left) && bftTree(p.right, q.right);
}

// console.log(bftTree([(1, 2, 3)], [1, 2, 3]));
