const arr = [1,2,3];

for (let i = 0; i < arr.length; i++) {
    let subArr = [];
    for (let j = i; j < arr.length; j++) {
        subArr.push(arr[j]);
        console.log(subArr)
    }
}

function printAllSubarrays(arr) {
    for (let start = 0; start < arr.length; start++) {
        let subarray = [];
        for (let end = start; end < arr.length; end++) {
            subarray.push(arr[end]);
            console.log(subarray);
        }
    }
}

printAllSubarrays([1, 2, 3]);

// Can you write a function that counts how many subarrays an array has?
// (Hint: For array of length n, total subarrays = n * (n + 1) / 2)

function countSubarray(arr) {
    const arrLength = arr.length;
    const count = ((arrLength * (arrLength + 1)) / 2);
    console.log('count', count);
    return count;
}

countSubarray([1, 2, 3])

//1. Maximum Sum Subarray (Kadane’s Algorithm)

function maxSubarraySum(nums) {
    let maxSoFar = nums[0];  // The maximum sum so far
    let maxEndingHere = nums[0];  // The maximum sum of subarray ending at current index
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);  // Either start a new subarray or extend the current one
        maxSoFar = Math.max(maxSoFar, maxEndingHere);  // Track the maximum sum found
    }
    
    return maxSoFar;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

const permSubArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        permSubArr.push(arr.slice(i, j + 1));  // Using slice to extract subarrays
    }
}

console.log('permSubArr', permSubArr);


function subArrayTargetSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0; let tempSubArr = [];
            for (let j = i; j < arr.length; j++) {
                tempSubArr.push(arr[j])
                sum += arr[j];
                console.log('outer',i, 'inner', j, 'sum', sum)
                if (sum === target) {
                    console.log('subArrFound', tempSubArr)
                }
            }
    } 
}

const arr2 = [1, 2, 3, 4];
subArrayTargetSum(arr2, 3); 

//The more efficient technique of subArrayTargetSum is based on prefix sums and a hashmap (or hashset). Let's explain the logic behind sum - target in this context.


function subArrayTargetSum(arr, target) {
    let sum = 0;               // This is the prefix sum
    let map = new Map();       // This will store prefix sums and their frequencies
    map.set(0, 1);             // Initializing with 0 to handle the case when the subarray starts at index 0

    for (let num of arr) {
        sum += num;  // Update the prefix sum
        
        // Check if sum - target has already appeared as a prefix sum
        if (map.has(sum - target)) {
            console.log('subArrFound', sum - target, num);
        }

        // Store the current prefix sum in the map
        map.set(sum, (map.get(sum) || 0) + 1);  // Increment the frequency of sum
    }
}

subArrayTargetSum(arr2, 3);  // Output: subArrFound 3 and subArrFound 4


function longestDistinctSubarray(arr) {
    let left = 0;
    let maxLength = 0;
    const seen = new Map();
    
    for (let right = 0; right < arr.length; right++) {
        // If element is seen, move left pointer
        if (seen.has(arr[right])) {
            left = Math.max(left, seen.get(arr[right]) + 1);
        }
        
        // Store the current index of the element
        seen.set(arr[right], right);
        
        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

const arr3 = [1, 2, 3, 1, 2, 3, 4];
console.log(longestDistinctSubarray(arr3));  // Output: 4 (subarray [1, 2, 3, 4])
