// Problem Statement: Search an element in an array and return its position

let arr = [6, 7, 9, 5, 3, 10];

//sol 1 using linear search

function linearSearch(arr, elem) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            console.log('Found the element', elem, 'at index', i);
            return; // Exit the function once found
        }
    }
    // If we finish the loop and haven't found the element
    console.log('Alas! Element not found.');
}

linearSearch(arr, 5)

//sol 2 using binary search

function binarySearch(arr, elem) {
    // Sort the array first
    arr.sort((a, b) => a - b);
    console.log('Binary Search - sorted arr:', arr, 'elem:', elem);

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === elem) {
            console.log('Found the element', elem, 'at index', mid);
            return; // Exit the function once found
        }
        if (arr[mid] < elem) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    console.log('Alas! Element not found.');
}

binarySearch(arr, 5);
