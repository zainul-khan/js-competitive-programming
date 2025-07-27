//insert element in begining

function insertAtBegining(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        console.log(`Relpacing ${arr[i]} with ${arr[i - 1]}`)
        arr[i] = arr[i - 1];
    }
    console.log('arrrrrr', arr)
    arr[0] = value;
    return arr;
}

console.log(insertAtBegining([2, 3, 4], 1))

//insert element in middle

function insertAtPosition(arr, index, value) {
    
    for (let i = arr.length; i >= index; i--) {
        console.log(`Relpacing ${arr[i]} with ${arr[i - 1]}`)
        arr[i] = arr[i -1];
    }
    arr[index] = value
    return arr
}

console.log(insertAtPosition([1, 2, 4, 5], 2, 3));  // [1, 2, 3, 4, 5]


//insert element in last

function insertAtLast(arr, value) {
    arr[arr.length] = value;
    return arr;
}

console.log(insertAtLast([1, 2, 3], 4));  // [1, 2, 3, 4]

//replace zero with one
function replaceZerosWithOne(str) {
    // Convert the string to an array of characters
    let arr = str.split('');
    
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            arr[i] = '1';  // Replace '0' with '1'
        }
    }
    console.log('arr', arr)
    // Join the array back into a string
    return arr.join('');
}

console.log(replaceZerosWithOne('10001'));  // Output: '11111'


function removeFromBeginning(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Reduce the array length manually
    arr.length = arr.length - 1;

    return arr;
}

console.log(removeFromBeginning([1, 2, 3, 4]));  // Output: [2, 3, 4]

function removeFromEnd(arr) {
    arr.length = arr.length - 1
    // console.log('arr')
    return arr
}

console.log(removeFromEnd([1,2,3,4]));

function removeFromPosition(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (i >= index) {
            arr[i] = arr[i+1]
        }
    }
    arr.length = arr.length - 1
}

removeFromPosition([1,2,3,4], 2)


function removeFromPositionOpt(arr, index) {
    // Handle invalid index
    if (index < 0 || index >= arr.length) {
        console.log("Invalid index");
        return arr;
    }

    // Shift elements left from the index
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Reduce length by 1 to remove the last duplicate
    arr.length = arr.length - 1;

    return arr;
}

// Test cases
console.log(removeFromPositionOpt([1, 2, 3, 4], 2)); // [1, 2, 4]
console.log(removeFromPositionOpt([1, 2, 3, 4], 0)); // [2, 3, 4]
console.log(removeFromPositionOpt([1, 2, 3, 4], 4)); // Invalid index → [1, 2, 3, 4]
console.log(removeFromPositionOpt([1, 2, 3, 4], -1)); // Invalid index → [1, 2, 3, 4]

//remove all occurances
function removeAllOccurrences(arr, value) {
    let i = 0;
    
    while (i < arr.length) {
        if (arr[i] === value) {
            // Shift all elements left
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--; // Remove the last element (duplicate)
        } else {
            i++;
        }
    }

    return arr;
}

console.log(removeAllOccurrences([1, 2, 3, 2, 4, 2], 2));  // Output: [1, 3, 4]


// Left Rotation
function rotateLeft(arr, n) {
    n = n % arr.length;  // In case n is larger than the array length
    let result = [...arr]; // Make a copy of the array (to avoid mutation)
    
    for (let i = 0; i < n; i++) {
        let temp = result[0];
        for (let j = 0; j < result.length - 1; j++) {
            result[j] = result[j + 1];  // Shift left
        }
        result[result.length - 1] = temp; // Place the first element at the end
    }
    
    return result;
}

// Right Rotation
function rotateRight(arr, n) {
    n = n % arr.length;  // In case n is larger than the array length
    let result = [...arr]; // Make a copy of the array (to avoid mutation)
    
    for (let i = 0; i < n; i++) {
        let temp = result[result.length - 1];
        for (let j = result.length - 1; j > 0; j--) {
            result[j] = result[j - 1];  // Shift right
        }
        result[0] = temp; // Place the last element at the front
    }
    
    return result;
}

console.log(rotateLeft([1, 2, 3], 1));  // Output: [2, 3, 1]
console.log(rotateRight([1, 2, 3], 1)); // Output: [3, 1, 2]


function flattenArray(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If element is an array, recursively flatten it
            result = result.concat(flattenArray(arr[i]));
        } else {
            // If element is not an array, add it to the result
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5]]]))  // Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            // Shift all elements to the left starting from i+1
            for (let j = i + 1; j < length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            length--; // reduce effective length
            i--; // check this index again, in case of multiple duplicates
        }
    }

    // Truncate array to new length manually
    while (arr.length > length) {
        arr.pop(); // this is the only minor built-in used just to simulate truncation
    }

    return arr;
}

let arr = [1, 2, 2, 2, 3, 4, 5];
removeDuplicates(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
    // return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
// Output: [1, 2, 3, 4, 5]
