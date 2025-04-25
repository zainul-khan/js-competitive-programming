// Question 2: Count Subarrays with a Given Sum
// Problem: Given an array of integers and a target sum, count the number of subarrays that sum up to the target.

// Input: arr = [1, 2, 3, 4], target = 5
// Output: 2  // The subarrays are [2, 3] and [5] (if present).

const arr = [1, 2, 3, 4, 5];
const target = 5;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        // console.log('i', arr[i], 'j', arr[j], 'sum', sum, 'pair', arr.slice(arr[i], arr[j + 1]))
        sum = sum + arr[j];
        if (sum == target) {
            console.log('wooooooo', 'i', arr[i], 'j', arr[j], 'sum', sum, 'pair', arr.slice(arr[i], arr[j + 1]))
            count += 1;
        }
    }
}
console.log(count)

function longestDistinctSubarray(arr) {
    let n = arr.length;
    let maxLength = 0;
    let start = 0;
    const map = new Map();

    for (let end = 0; end < n; end++) {
        if (map.has(arr[end])) {
            start = Math.max(map.get(arr[end]) + 1, start);
        }
        map.set(arr[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

function numSubarraysWithProductLessThanK(arr, k) {
    let product = 1;
    let count = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        product *= arr[end];

        while (product >= k && start <= end) {
            product /= arr[start];
            start++;
        }

        count += end - start + 1; // Count all subarrays ending at 'end'
    }

    return count;
}
