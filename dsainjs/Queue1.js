//Implementing queue with array
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(elem) {
        this.items.push(elem);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue underflow')
        } else {
            this.items.shift()
        }
    }

    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty')
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }
}

const q = new Queue();
q.enqueue(4);
q.enqueue(2);
q.enqueue(1);
console.log('size', q.size());
q.dequeue();
q.printQueue()