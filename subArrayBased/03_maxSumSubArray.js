//Problem: Given an array of integers, find the contiguous subarray that has the largest sum and return that sum.

// Answer: You can use Kadane's algorithm for an efficient solution:


const arr = [1, 2, 3]
function maxSubArray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    console.log(maxSoFar)
    return maxSoFar;
}
maxSubArray(arr)