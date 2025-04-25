function replaceZerosWithOnes(num) {
    let ans = 0; // This will hold the final result
    let tmp = 1; // This will be used to place the digits correctly in the result

    while (num > 0) {
        let lastDigit = num % 10; // Isolate the last digit

        // Replace 0 with 1
        if (lastDigit === 0) {
            lastDigit = 1;
        }
        // Form the new number
        ans = lastDigit * tmp + ans;
        // Prepare for the next iteration
        num = Math.floor(num / 10); // Discard the last digit
        tmp *= 10; // Move to the next place value
    }

    return ans;
}

// Example usage:
let inputNumber = 102030;
let result = replaceZerosWithOnes(inputNumber);
console.log(result); // Outputs: 121131
