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

//For non efficient 2 loops
const arr2 = [1,2,-3];
let maxSum = 0;
let maxSumSubArr = [];

for (let i = 0; i < arr2.length; i++) {
    let sum = 0;
    let subArr = [];
    for(let j = i; j < arr2.length; j++) {
        sum = sum + arr2[j]
        subArr.push(arr2[j])
        if (maxSum < sum) {
            maxSum = sum;
            maxSumSubArr = [...subArr];
        }
    }
}

console.log(`Max sum is: ${maxSum}, Max sum sub arr is ${maxSumSubArr}`)


const arr3 = [1, 6, -3, 4, 5];
const k = 3;

let maxSumm = 0;
for (let i = 0; i < k; i++) {
    maxSum += arr[i];
}

let windowSum = maxSum;
console.log('windowSum', windowSum)
for (let i = k; i < arr3.length; i++) {
    //arr3[i - k]  the one leaving the window
    //the one entering the window
    windowSum = windowSum - arr3[i - k] + arr[i];
    if (windowSum > maxSum) {
        maxSumm = windowSum;
    }
}

console.log("Max sum of subarray of size", k, "is", maxSumm);