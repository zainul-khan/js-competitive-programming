function findFactors(num) {
    if (num <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    const factors = new Set(); // Using a Set to avoid duplicates
    const sqrtNum = Math.sqrt(num);
    console.log('sqrtNum', sqrtNum)

    for (let i = 1; i <= sqrtNum; i++) {
        if (num % i === 0) {
            factors.add(i); // Add the divisor
            factors.add(num / i); // Add the corresponding factor
        }
    }

    console.log(`Factors of ${num}: ${Array.from(factors).join(', ')}`);
}

// Example usage:
const number = 12; // Change this to any positive integer
findFactors(number);
