//Problem Statement: Rearrange the array such that the first half is arranged in increasing order, and the second half is arranged in decreasing order


function rearrangeArray(arr) {
    let n = arr.length;
    
    // Sort the array in increasing order
    arr.sort((a, b) => a - b);

    // First half: print in increasing order
    let result = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(arr[i]);
    }

    // Second half (including the middle element if odd): print in decreasing order
    for (let i = n - 1; i >= Math.floor(n / 2); i--) {
        result.push(arr[i]);
    }

    return result;
}

// Example usage:
let arr = [8, 7, 1, 6, 5, 9, 3];
let result = rearrangeArray(arr);
console.log(result);
