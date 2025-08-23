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


// Example: s = "eceba", k = 2
// Answer: 3 ("ece" or "eba")

function longestSubstringWithAtMostKDistinct(s, k) {
    // TODO: Your turn! 
    // Hint: Use a Map to count character frequencies
    let left = 0;
    let right = 0;
    let maxLength = 1;
    let str = "";
    let charMap = new Map();


    for (let right = 0; right < arr.length; right++) {
        // str += s[right];
        let char = s[right];

        // Update character count
        charMap.set(char, (charMap.get(char) || 0) + 1);
        console.log(charMap)
        // If more than k distinct characters, shrink window from the left
        while (charMap.size > k) {
            let leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);

            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++; // shrink window
        }

    }

}

console.log(longestSubstringWithAtMostKDistinct("eceba", 2)); // Expected: 3
console.log(longestSubstringWithAtMostKDistinct("aa", 1));    // Expected: 2

// 🎯 DYNAMIC SLIDING WINDOW - COMPLETE SOLUTIONS

// =================================================================
// PROBLEM 2: Longest Substring with At Most K Distinct Characters
// =================================================================

function longestSubstringWithAtMostKDistinct(s, k) {
    if (k === 0) return 0;
    
    let left = 0;
    let maxLength = 0;
    let charCount = new Map(); // Track character frequencies
    
    for (let right = 0; right < s.length; right++) {
        // 1. ADD right character
        const rightChar = s[right];
        charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);
        
        // 2. SHRINK if we have more than k distinct characters
        while (charCount.size > k) {
            const leftChar = s[left];
            charCount.set(leftChar, charCount.get(leftChar) - 1);
            
            // Remove character if count becomes 0
            if (charCount.get(leftChar) === 0) {
                charCount.delete(leftChar);
            }
            left++;
        }
        
        // 3. UPDATE result
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// 🧠 EXPLANATION:
// - Use Map to count each character in current window
// - When we have > k distinct chars, shrink from left
// - Remove chars from map when their count becomes 0
// - Window is valid when map.size ≤ k

console.log("=== PROBLEM 2 TESTS ===");
console.log(longestSubstringWithAtMostKDistinct("eceba", 2)); // 3 ("ece")
console.log(longestSubstringWithAtMostKDistinct("aa", 1));    // 2 ("aa")
console.log(longestSubstringWithAtMostKDistinct("abaccc", 2)); // 4 ("accc")

// =================================================================
// PROBLEM 3: Longest Subarray with At Most K Zeros
// =================================================================

function longestSubarrayWithAtMostKZeros(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // 1. ADD right element
        if (nums[right] === 0) {
            zeroCount++;
        }
        
        // 2. SHRINK if we have more than k zeros
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        
        // 3. UPDATE result
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// 🧠 EXPLANATION:
// - Count zeros in current window
// - When zeros > k, shrink from left until zeros ≤ k
// - Much simpler than Problem 2 - just count one thing!

console.log("\n=== PROBLEM 3 TESTS ===");
console.log(longestSubarrayWithAtMostKZeros([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6
console.log(longestSubarrayWithAtMostKZeros([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // 10

// =================================================================
// PROBLEM 4: Fruits into Baskets (At Most 2 Distinct Types)
// =================================================================

function totalFruit(fruits) {
    let left = 0;
    let maxFruits = 0;
    let fruitCount = new Map();
    
    for (let right = 0; right < fruits.length; right++) {
        // 1. ADD right fruit
        const rightFruit = fruits[right];
        fruitCount.set(rightFruit, (fruitCount.get(rightFruit) || 0) + 1);
        
        // 2. SHRINK if we have more than 2 fruit types
        while (fruitCount.size > 2) {
            const leftFruit = fruits[left];
            fruitCount.set(leftFruit, fruitCount.get(leftFruit) - 1);
            
            if (fruitCount.get(leftFruit) === 0) {
                fruitCount.delete(leftFruit);
            }
            left++;
        }
        
        // 3. UPDATE result
        maxFruits = Math.max(maxFruits, right - left + 1);
    }
    
    return maxFruits;
}

// 🧠 EXPLANATION:
// - This is EXACTLY the same as "at most K distinct" with K=2!
// - The story about baskets is just to confuse you 😄
// - Track fruit types in Map, shrink when > 2 types

console.log("\n=== PROBLEM 4 TESTS ===");
console.log(totalFruit([1,2,1]));           // 3 (all fruits)
console.log(totalFruit([0,1,2,2]));         // 3 ([1,2,2])  
console.log(totalFruit([1,2,3,2,2]));       // 4 ([2,3,2,2])

// =================================================================
// 🎯 THE UNIVERSAL PATTERN - Notice the Similarity!
// =================================================================

/*
ALL dynamic sliding window problems follow this pattern:

function slidingWindow(input, constraint) {
    let left = 0;
    let result = 0;
    let windowState = {}; // Track what's in current window
    
    for (let right = 0; right < input.length; right++) {
        // 1. ADD element at right to window
        updateWindowState(input[right]);
        
        // 2. SHRINK while window violates constraint
        while (windowViolatesConstraint()) {
            removeFromWindowState(input[left]);
            left++;
        }
        
        // 3. UPDATE result with current valid window
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}

The ONLY things that change:
- What we track (sum, distinct count, zero count, etc.)
- What makes window invalid (sum > k, distinct > k, etc.)
- Whether we update result during expansion or contraction
*/

// =================================================================
// 🚀 MASTERY TEST: Can you solve this in 2 minutes?
// =================================================================

function longestSubstringWithoutRepeatingChars(s) {
    // Find longest substring with all unique characters
    // Example: "abcabcbb" → answer: 3 ("abc")
    
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // ADD right char
        while (charSet.has(s[right])) {
            // SHRINK until no duplicates
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        
        // UPDATE result
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

console.log("\n=== MASTERY TEST ===");
console.log(longestSubstringWithoutRepeatingChars("abcabcbb")); // 3
console.log(longestSubstringWithoutRepeatingChars("bbbbb"));    // 1
console.log(longestSubstringWithoutRepeatingChars("pwwkew"));   // 3