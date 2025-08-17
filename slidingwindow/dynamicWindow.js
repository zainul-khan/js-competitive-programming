//Minimum Size Subarray Sum
// Given an array of positive integers and a target sum, find the length of the smallest subarray whose sum is greater than or equal to the target sum.
// If there is no such subarray, return 0.

const arr = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]
const targetSum = 15;

function smallestSubArrayWithTargetSumBruteForce(arr) {
    let minSubArrLength = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum >= targetSum) {
                const subArrLength = j - i + 1;
                minSubArrLength = Math.min(minSubArrLength, subArrLength);
                break; // We can break here since we're looking for the minimum length
            }
        }
    }
    console.log(minSubArrLength === Infinity ? 0 : minSubArrLength);
}
smallestSubArrayWithTargetSumBruteForce(arr)


function smallestSubArrayWithTargetSumOptimized(arr, targetSum) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        //keep expanding till sum >= targetSum
        sum += arr[right];

        //as soon as sum exceeds targetSum then contract the window
        while (sum >= targetSum) {
            //while contracting the window count minLength
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

smallestSubArrayWithTargetSumOptimized(arr)