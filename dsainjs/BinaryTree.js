class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderTraversal(node, result = []) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    preorderTraversal(node, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    }

    postorderTraversal(node, result = []) {
        if (node !== null) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const tree = new BinaryTree();
console.log('khaali', tree);  // Empty tree
tree.insert(10);
console.log('firstInsert', tree);  // Insert 10
tree.insert(20);
console.log('secondInsert', tree);  // Insert 20
tree.insert(4);
console.log('thirdInsert', tree);  // Insert 4
tree.insert(2);
console.log('fourthInsert', tree);  // Insert 2
tree.insert(2);
console.log('fifthInsert', tree);  // Insert another 2
tree.insert(5);
console.log('sixthInsert', tree);  // Insert another 2

console.log('Inorder Traversal:', tree.inorderTraversal(tree.root));  // Output the inorder traversal
console.log('Preorder Traversal:', tree.preorderTraversal(tree.root));  // Output the preorder traversal
console.log('Postorder Traversal:', tree.postorderTraversal(tree.root));  // Output the postorder traversal
