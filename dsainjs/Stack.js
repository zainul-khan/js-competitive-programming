class Stack {
    constructor(array) {
        this.array = array || []; // Ensure default value if array is not provided
    }

    addItem(item) {
        if (item === undefined || item === null) {
            throw new Error("Invalid item");
        }
        this.array.push(item);
    }

    removeItem() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow: cannot remove from an empty stack");
        }
        return this.array.pop();
    }

    peekItem() {
        if (this.isEmpty()) {
            return undefined; // Stack is empty
        }
        return this.array[this.array.length - 1];
    }

    printAll() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            for (let i = 0; i < this.array.length; i++) {
                console.log(this.array[i]);
            }
        }
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

// Testing the enhanced stack
const obj = new Stack([]);
obj.addItem(5);
obj.addItem(8);
obj.addItem(2);
console.log("Peek item:", obj.peekItem()); // 2
console.log(obj.array); // [5, 8, 2]
obj.printAll(); // 5, 8, 2
obj.removeItem();
console.log(obj.array); // [5, 8]
obj.printAll(); // 5, 8
