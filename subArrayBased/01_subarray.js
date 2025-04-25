//A subarray is a contiguous part of an array. It consists of one or more elements taken from the original array, and the elements in a subarray are in the same order as they appear in the original array.

const arr = [1,2,3];
const subArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        subArr.push(arr.slice(i, j + 1))
    }
}

console.log(subArr)


// function getAllSubarrays(arr) {
//     const subarrays = [];
//     for (let start = 0; start < arr.length; start++) {
//         for (let end = start; end < arr.length; end++) {
//             subarrays.push(arr.slice(start, end + 1));
//         }
//     }
//     return subarrays;
// }

// const arr = [1, 2, 3];
// console.log(getAllSubarrays(arr));