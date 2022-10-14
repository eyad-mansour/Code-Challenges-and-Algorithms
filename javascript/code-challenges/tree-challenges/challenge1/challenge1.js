'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

// function tree(preOrder, inOreder) {
//   if (preOrder.length === 0) return null;
//   let root = preOrder[0];

//   let rootMid = inOreder.findIndex((val, idx) => {
//     val.root;
//     return idx;
//   });

//   let rightWithRoot = rootMid + 1;
//   let rightChild = inOreder.slice(rightWithRoot);
//   //   let leftChild = inOreder.slice();
//   let leftChild = inOreder.slice(0, rightWithRoot - 1);
//   console.log(rootMid);

//   return tree;
// }

function newTree(preOrder, inOreder) {
  if (preOrder.length === 0) return null;
  let root = preOrder[0];
  let rootMid = inOreder.indexOf(root);

  let leftTree = newTree(
    preOrder.slice(1, rootMid + 1),
    inOreder.slice(0, rootMid)
  );

  let rightTree = newTree(
    preOrder.slice(rootMid + 1),
    inOreder.slice(rootMid + 1)
  );

  return new Node(preOrder[0], leftTree, rightTree);
}
console.log(newTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log();
