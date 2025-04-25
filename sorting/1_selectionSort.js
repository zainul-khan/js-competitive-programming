// First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.
// The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on.
// (Initially, the range will be the whole array starting from the first index.)
// Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
// After that, we will swap the minimum element with the first element of the selected range(in step 1). 
// Finally, after each iteration, we will find that the array is sorted up to the first index of the range. 


let unsortedArr = [9, 5, 1, 3, 2];

for (let i = 0; i < unsortedArr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < unsortedArr.length; j++) {
        if (unsortedArr[j] < unsortedArr[minIndex]) {
            minIndex = j;
        }
    }
    // Swap the elements at i and minIndex
    if (minIndex !== i) {
        let temp = unsortedArr[i];
        console.log('temp', temp)
        unsortedArr[i] = unsortedArr[minIndex];
        console.log('unsortedArr', unsortedArr[i])
        unsortedArr[minIndex] = temp;
        console.log('unsortedArr', unsortedArr[minIndex])
    }
}

console.log(unsortedArr);


// Mnemonic to Remember Selection Sort
// Think of Selection Sort as the "Find-and-Swap" method:

// Find the Smallest: Look through the unsorted part and find the smallest element.
// Swap to the Front: Swap it to the front of the unsorted part.
// Move Right: Repeat the process for the next position in the array until the end.
// So, you can remember this pattern:

// "Find, Swap, Move Right"