// Bubble Sort compares adjacent elements in the array and swaps them if they’re out of order. The largest elements "bubble up" to the end of the array after each pass, just like bubbles rising to the surface of water. We repeat this process until the array is sorted.


// First, we will select the range of the unsorted array. For that, we will run a loop(say i) that will signify the last index of the selected range. The loop will run backward from index n-1 to 0(where n = size of the array). The value i = n-1 means the range is from 0 to n-1, and similarly, i = n-2 means the range is from 0 to n-2, and so on.
// Within the loop, we will run another loop(say j, runs from 0 to i-1 though the range is from 0 to i) to push the maximum element to the last index of the selected range, by repeatedly swapping adjacent elements.
// Basically, we will swap adjacent elements(if arr[j] > arr[j+1]) until the maximum element of the range reaches the end.
// Thus, after each iteration, the last part of the array will become sorted. Like: after the first iteration, the array up to the last index will be sorted, and after the second iteration, the array up to the second last index will be sorted, and so on.
// After (n-1) iteration, the whole array will be sorted.


// Outer Loop (for (let i = arr.length - 1; i >= 0; i--))
//     Purpose: The outer loop, controlled by i, determines how many elements need to be sorted in each pass.
//     Initialization: i starts at arr.length - 1 (the last index of the array). This is because the last element becomes "sorted" after the first pass, and so on.
//     Decrementing: i decreases in each pass (i--). Each pass will place the next largest element in its correct position at the end of the array. As i decreases, we reduce the range of elements that need to be checked.

let arr = [9, 5, 1, 3, 2];

for (let i = arr.length - 1; i >= 0; i--) {
    let isSwapped = 0
    for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
            isSwapped = 1
        }
    }
    if (isSwapped === 0) {
        break
    }
}

console.log(arr)

//First see selection sort then bubble sort looks like bubble sort is oppo of selection sort


