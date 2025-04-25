let arr = [7, 5, 9, 2, 8]


function selectionSort(arr) {
    //two loops will run

    //pick min elem 
    //swap with first
    //move forward

    for (let i = 0; i < arr.length; i++) {
        let minIndexPointer = i; //in each iteration before i will be sorted arr
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndexPointer]) {
                minIndexPointer = j
            }
        }

        if (minIndexPointer !== i) { // swapping is required
            let temp = arr[i]; //init a temp var and keep the latest first unsorted elem at temp
            arr[i] = arr[minIndexPointer] //swap is with j we are writing minIndexPointer as j is already updated and out of that scope
            arr[minIndexPointer] = temp //swap minIndexPointer with latest first unsorted elem
        }
    }
    console.log('selectionsort', arr)
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log('i', i)
        for (let j = 0; j < arr.length; j++) {
            console.log('arr[j]', arr[j], 'arr[j + 1]', arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
            console.log('iter', i, 'arrrr', arr)
        }
    }
    console.log('bubbleSort', arr) 
}

function insertionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let j = i; //init j with i
        while(j > 0 && arr[j] < arr[j -1]) { //elem behind j ie j -1 is > than j then swap you can also write arr[j - 1] > arr[j]
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
            j-- //decrement j to first idx
        }
    }

    console.log('insertionsort', arr)
}

// selectionSort(arr)
bubbleSort(arr)
// insertionSort(arr)
