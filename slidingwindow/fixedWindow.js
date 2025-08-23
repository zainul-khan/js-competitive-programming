// find the maximum sum of a subarray of size k using the sliding window technique.
function findMaxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i-k]
        maxSum = Math.max(windowSum, maxSum)
    }
    console.log(maxSum)
}

findMaxSumSubarray([1, 2, 3, -4], 2)

// find the minimum sum of a subarray of size k using the sliding window technique.
function findMinSumSubarray(arr, k) {
    let minSum = Infinity;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    minSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i-k]
        minSum = Math.min(windowSum, minSum)
    }
    console.log(minSum)
}

findMinSumSubarray([1, 2, 3, -4], 2)

function findMaxAvgOfSubArr(arr, k) {
    let maxAvg = 0;
    let windowSum = 0;

    // Get sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxAvg = windowSum / k;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i]; // remove left, add right
        let currentAvg = windowSum / k;
        maxAvg = Math.max(currentAvg, maxAvg);
    }

    console.log(maxAvg);
}

findMaxAvgOfSubArr([1, 2, 5, 4], 3);

function hasAllPositiveSubarray(arr, k) {
    let nonPositiveCount = 0;

    // Check first window
    for (let i = 0; i < k; i++) {
        if (arr[i] <= 0) nonPositiveCount++;
    }

    if (nonPositiveCount === 0) return true;

    // Slide window
    for (let i = k; i < arr.length; i++) {
        if (arr[i - k] <= 0) nonPositiveCount--; // element going out
        if (arr[i] <= 0) nonPositiveCount++;     // element coming in

        if (nonPositiveCount === 0) return true;
    }

    return false;
}

console.log(hasAllPositiveSubarray([1, -2, 3, 4, 5], 3)); // true
console.log(hasAllPositiveSubarray([1, -2, 3, -4, 5], 2)); // false

//Longest subarray with sum ≤ k
function longestSubarrayWithSumLEK(arr, k) {
    let start = 0;
    let sum = 0;
    let maxLength = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > k && start <= end) {
            sum -= arr[start];
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestSubarrayWithSumLEK([1, 2, 1, 0, 1, 1, 0], 4)); // 5
