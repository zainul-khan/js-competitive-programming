//reverse the given array

let arr = [10, 12, 8, 15, 1];

let leftPointer = 0
let rightPointer = arr.length - 1
let temp = 0;

while (leftPointer < rightPointer) {
    temp = arr[leftPointer];
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
}

console.log('rev', arr)

function swap(a, b) {
    console.log('beforeswap', a, b)
    let temp = 0;
    temp = a;
    a = b;
    b = temp;
    console.log('afterswap', a, b)
};

swap(2, 3)