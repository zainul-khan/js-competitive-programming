// The median is a measure of central tendency that represents the middle value of a data set when it is arranged in ascending or descending order. Here's how it works:

// 1. **Odd Number of Values**: If the data set has an odd number of values, the median is the middle value. For example, in the set \([1, 2, 3]\), the median is \(2\).

// 2. **Even Number of Values**: If the data set has an even number of values, the median is the average of the two middle values. For example, in the set \([1, 2, 3, 4]\), the median is \((2 + 3) / 2 = 2.5\).

// The median is useful because it is less affected by outliers and skewed data than the mean, making it a better measure of central tendency in certain situations.

let arr = [2, 3, 4, 1];
let sortedArr = arr.sort((a, b) => a - b);

let isEven = sortedArr.length % 2 === 0;
let median = null;

if (isEven) {
    // For an even-length array, average the two middle numbers
    let mid1 = sortedArr[sortedArr.length / 2 - 1];
    let mid2 = sortedArr[sortedArr.length / 2];
    median = (mid1 + mid2) / 2;
} else {
    // For an odd-length array, take the middle number
    median = sortedArr[Math.floor(sortedArr.length / 2)];
}

console.log(median);
