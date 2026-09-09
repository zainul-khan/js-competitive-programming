class Tree {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new Tree(1);
root.left = new Tree(3);
root.right = new Tree(5);

// Add a left child to the node with value 3
root.left.left = new Tree(7);

console.log(root);

// A Tree is a non-linear data structure that represents a hierarchy. Unlike arrays or linked lists which are linear, a tree has a parent-child relationship.
// DOM in HTML: Binary trees help manage the hierarchical structure of web pages.
// File Explorer: They organize file systems for efficient navigation.
// Expression Evaluation: Used in calculators and compilers to evaluate arithmetic expressions.
// Routing Algorithms: Support decision-making in network routing.
// Additional Uses: Various other applications that benefit from hierarchical data organization.

//Tree traversals are of 3 types
// 1. Depth-First Search (DFS) Traversals
// These go deep into the tree before moving sideways.
// Inorder (Left → Root → Right)
// Preorder (Root → Left → Right)
// Postorder (Left → Right → Root)

// 2. Breadth-First Search (BFS) / Level Order
// This goes level by level, from top to bottom.