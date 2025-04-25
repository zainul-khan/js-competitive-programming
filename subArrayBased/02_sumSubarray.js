// Question: Given an array of numbers, find the subarrays that sum to a specific target value.
// For example, for the array [1, 2, 3, 4] and the target sum 5, the subarrays that sum to 5 are:

// [2, 3]
// [5] (if present in the array)

let arr = [1, 2, 3, 4];
let target = 5;
const subArr = [];

for (let i = 0; i < arr.length; i++) {
    let sum = 0; // Reset sum for each starting index
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]; // Update sum with the current element
        
        if (sum === target) {
            console.log('The subarray is: ', arr.slice(i, j + 1));
            subArr.push(arr.slice(i, j + 1)); // Store the found subarray
        }
    }
}

console.log('All subarrays that sum to 5: ', subArr);

