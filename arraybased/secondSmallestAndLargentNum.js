//find the second smallest number in array
//find the second largest number in array

let arr = [10, 12, 8, 15, 1];

let smallest = Number.MAX_VALUE;
let secondSmallest = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest; // Update second smallest
        smallest = arr[i];         // Update smallest
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];   // Update second smallest
    }
}

console.log("smallest:", smallest, "secondSmallest:", secondSmallest)

let largest = Number.MIN_VALUE;
let secondLargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest; // Update second largest
        largest = arr[i];        // Update largest
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];  // Update second largest
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);