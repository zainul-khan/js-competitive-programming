function maxSumOfSubArr(arr) {
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(sum, maxSum); 
        }
    }
    console.log('maxSum', maxSum);
    return true;
}
maxSumOfSubArr([1, 4,-1, 2]);

function maxSumOfSubArrKthWindowBruteForce(arr, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(sum, maxSum);
    }

    console.log('maxSum', maxSum);
    return maxSum;
}
maxSumOfSubArrKthWindowBruteForce([1, 4,-1, 2], 2);

function maxSumOfSubArrKthWindowOptimzed(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    
    for(let i = 0; i < k; i++) {
        windowSum += arr[i]        
    }
    
    maxSum = windowSum;
    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        console.log(windowSum)
        maxSum = Math.max(windowSum, maxSum);
    }
    console.log(maxSum);
}
maxSumOfSubArrKthWindowOptimzed([1, 4,-1, 2], 2);

// | Function                            | Subarray Type                | Where to update `maxSum`               |
// | ----------------------------------- | ---------------------------- | -------------------------------------- |
// | `maxSumOfSubArr`                    | All subarrays (any size)     | **Inside** inner loop                  |
// | `maxSumOfSubArrKthWindowBruteForce` | Fixed-size `k` (brute force) | **After** inner loop (1 per window)    |
// | `maxSumOfSubArrKthWindowOptimized`  | Fixed-size `k` (optimized)   | **Inside** main loop (once per window) |


