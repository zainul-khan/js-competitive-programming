// Select an element in each iteration from the unsorted array(using a loop).
// Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
// The “inner while loop” basically shifts the elements using swapping.


let arr = [9, 5, 1, 3, 2];

for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        console.log('arr[j]', arr[j], 'arr[j-1]', arr[j-1])
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--
    }
}

console.log(arr)