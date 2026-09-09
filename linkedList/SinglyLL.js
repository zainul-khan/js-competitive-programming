class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next
            }

            current.next = node;
        }
        this.size++;
    }
    //insert at index

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false; // Index out of bounds
        }
        if (index === 0) {
            this.insertFirst(data);
            return true;
        }
        let node = new Node(data);
        let current = this.head;
        let prev = null;
        let count = 0;
        while (count < index) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = node;
        node.next = current;
        this.size++;
        return true;
    }
    //get at index
    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current.data;
    }
    // Remove at index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }
        let current = this.head;
        let prev = null;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Clear the list
    clear() {
        this.head = null;
        this.size = 0;
    }


    //print list data
    printListData() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

// Example usage:
const ll = new LinkedList();
// console.log(ll)
ll.insertFirst(100);
// console.log(ll)
ll.insertFirst(200);
// console.log(ll)
ll.insertFirst(300);
// console.log(ll)
// ll.printListData()
ll.insertLast(1001);
// ll.printListData()
ll.insertAt(69, 1);
ll.printListData()
// console.log(ll.getAt(0))
console.log('*****************************');
ll.removeAt(2)
ll.printListData()

