class Node {
    constructor(data) {
        this.data = data;   // The value of the node
        this.next = null;    // Reference to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // Start with no nodes
        this.size = 0;     // Start with size 0
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode
        }
    }

    print() {
        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

const ll = new LinkedList();
ll.insertAtTail(10);
ll.insertAtTail(20);
ll.insertAtTail(30);
ll.insertAtHead(1);
ll.print()
