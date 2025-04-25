//Implementing queue with object

class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.items = {}; // Object to store elements
    }

    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Empty queue")
        } else {
            const head = this.items[this.head];
            delete this.items[this.head];
            this.head++;
            return head;
        }
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("No elements in Queue");
        }
        return this.items[this.head];
    }

    isEmpty() {
        if (this.head === this.tail) {
            return true
        } else {
            return false
        }
    }



    printQueue() {
        for (let i = this.head; i < this.tail; i++) {
            console.log(this.items[i])
        }
    }
}

const q = new Queue()
q.enqueue(5)
q.enqueue(3)
q.enqueue(2)
q.printQueue()
q.dequeue()
q.printQueue()
console.log(q.front())
