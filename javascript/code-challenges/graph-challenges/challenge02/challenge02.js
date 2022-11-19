'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }
  connect(node) {
    this.edgeList.push(node);
    node.edgeList.push(this);
  }
  getAdjacentNodes() {
    return this.edgeList;
  }
  isConnected(node) {
    return !!this.edgeList.find((edge) => edge.value === node.value);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  breadthFirstTraversal(start) {
    const queue = [start];
    const visitedNodes = new Set();
    visitedNodes.add(start);

    while (queue.length > 0) {
      const node = queue.shift();

      for (const adjacency of node.edgeList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }
      }
      console.log(node.value);
    }
  }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');
const H = new Node('H');
const I = new Node('I');
const K = new Node('K');

const graph = new Graph([A, B, C, D, E, F, G, H, I, K]);

console.log(graph);

A.connect(C);
A.connect(E);
A.connect(B);
B.connect(D);
D.connect(E);
C.connect(F);
E.connect(G);
E.connect(F);
F.connect(H);
F.connect(I);
H.connect(K);
I.connect(K);

console.log(graph);

graph.breadthFirstTraversal(A);
