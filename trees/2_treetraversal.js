// 1. Tree class definition
class Tree {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 2. Build your tree:
//       1
//      / \
//     3   5
//    /
//   7

const root = new Tree(1);
root.left = new Tree(3);
root.right = new Tree(5);
root.left.left = new Tree(7);

// 3. Inorder Traversal (Left -> Root -> Right)
function inorder(node) {
    if (!node) return;

    inorder(node.left);           // Traverse left subtree
    console.log("Visited:", node.val);  // Visit root
    inorder(node.right);          // Traverse right subtree
}

// 4. Run inorder traversal
console.log("Inorder Traversal:");
inorder(root);
