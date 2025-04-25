
let arr = [9, 5, 1, 3, 2];

function iterativeLinearSearch(arr, targetNum) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetNum) {
            console.log(`${targetNum} is found on index ${i} and post ${i + 1}`)
            break;
        }
    }
}

function recursiveLinearSearch(arr, idx, targetNum) {
    if (idx >= arr.length) {
        console.log(`${targetNum} is not found in the array`);
        return;
    }
    if (arr[idx] === targetNum) {
        console.log(`${targetNum} is found on index ${idx} and post ${idx + 1}`);
        return;
    }
    recursiveLinearSearch(arr, idx + 1, targetNum);
}

// iterativeLinearSearch(arr, 0, 2)
recursiveLinearSearch(arr, 0, 2)