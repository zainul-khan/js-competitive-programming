// Remove Duplicates in-place from Sorted Array

//BRUTE FORCE APPROACH

let sortedArr = [1, 2, 3, 3, 4, 4, 4, 5, 5, 6]

function removeDupBruteForce(arr) {

    let setArr = new Set(arr); // Create a set from the array
    return Array.from(setArr); // Convert the set back to an array
}
console.log('Brute Force:', removeDupBruteForce(sortedArr));


function removeDupOptimalApproach(arr) {
    if (arr.length === 0) return 0; // Handle empty array

    let i = 0; // Pointer for the unique elements

    for (let j = 1; j < arr.length; j++) { // Start from the second element
        if (arr[i] !== arr[j]) { // Compare with the last unique element
            i++; // Move the unique pointer
            arr[i] = arr[j]; // Update the next unique position
        }
    }
    return i + 1; // Return the count of unique elements
}

const k = removeDupOptimalApproach(sortedArr);

console.log("The array after removing duplicate elements is:", k);
for (let i = 0; i < k; i++) {
    console.log(sortedArr[i]);
}
