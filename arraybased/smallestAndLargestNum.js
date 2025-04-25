//find the smallest number in array
//find the largest number in array

let arr = [10, 12, 8, 15, 1];
console.log(arr.sort((a, b) => a - b)) //sort by asc and catch first elem but not a good approach


function findMinAndMax(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// Example usage:
const array = [23, 1, 56, -2, 78, 0, 12];
const result = findMinAndMax(array);
console.log(`Smallest: ${result.min}, Largest: ${result.max}`);
