
// Binary search is more efficient than linear search but requires that the array is sorted.
// In the iterative approach, we repeatedly divide the search interval in half. If the target value is less than the value in the middle of the interval, we narrow the interval to the lower half, and if it's greater, we narrow it to the upper half.

let arr = [9, 5, 1, 3, 2];

function iterativeBinarySearch(arr, target) {

    let sortedArr = arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            return mid; // Return the index if target is found
        } else if (sortedArr[mid] < target) {
            left = mid + 1; // Narrow the search to the upper half
        } else {
            right = mid - 1; // Narrow the search to the lower half
        }
    }
}

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Sort the array once for binary search
    let sortedArr = arr.sort((a, b) => a - b);

    if (left > right) {
        return -1; // Base case: target not found
    }

    let mid = Math.floor((left + right) / 2);

    if (sortedArr[mid] === target) {
        return mid; // Return the index if target is found
    } else if (sortedArr[mid] < target) {
        return recursiveBinarySearch(sortedArr, target, mid + 1, right); // Search in the upper half
    } else {
        return recursiveBinarySearch(sortedArr, target, left, mid - 1); // Search in the lower half
    }
}

// Example usage

// console.log(iterativeBinarySearch(arr, 5))
console.log(recursiveBinarySearch(arr, 5)); 