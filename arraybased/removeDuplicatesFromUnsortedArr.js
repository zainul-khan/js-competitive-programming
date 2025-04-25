// Remove Duplicates in-place from Unsorted Array

//BRUTE FORCE APPROACH


let unsortedArr = [1, 2, 6, 3, 3, 4, 4, 8, 5, 5, 6, 5, 1, 9]

function removeDupBruteForce(arr) {

    let setArr = new Set(arr); // Create a set from the array
    return Array.from(setArr); // Convert the set back to an array
}
console.log('Brute Force:', removeDupBruteForce(unsortedArr));


//Object tracking
function removeDuplicates(arr) {
    let seen = {}; // Object to track seen elements
    let uniqueArr = []; // Array to hold unique values

    for (let i = 0; i < arr.length; i++) {
        console.log('seen', seen)
        if (!seen[arr[i]]) { // If the element hasn't been seen
            seen[arr[i]] = true; // Mark it as seen
            uniqueArr.push(arr[i]); // Add it to the unique array
        }
    }
    return uniqueArr;
}

// Example usage
let uniqueArr = removeDuplicates(unsortedArr);
console.log(uniqueArr);

function removeDuplicatesUsingHashMap(arr) {
    let map = new Map();
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            uniqueArr.push(arr[i]); // Add it to the unique array  
        }
    }

    return uniqueArr
}
let hashMapSol = removeDuplicatesUsingHashMap(unsortedArr);
console.log('hashMapSol', hashMapSol)