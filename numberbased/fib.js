function printFibonacci(n) {
    if (n <= 0) return; // No terms to display
    if (n === 1) {
        console.log(0); // Only the first term
        return;
    }

    let secondLast = 0; // (i-2)th term
    let last = 1;       // (i-1)th term

    console.log(secondLast); // Print the first term

    for (let i = 1; i < n; i++) {
        console.log(last); // Print the ith term
        let next = last + secondLast; // Calculate the ith term
        secondLast = last; // Update secondLast to last
        last = next; // Update last to next
    }
}

// Example usage:
const N = 5; // Change this to any positive integer
printFibonacci(N);
