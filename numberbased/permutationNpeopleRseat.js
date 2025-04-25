// Permutations in which N people can occupy R seats

// Problem Statement: Find permutations in which n people can occupy r seats in a classroom.

// Examples:

// Example 1:
// Input: N = 5, r = 3
// Output: 60
// Explanation: To permute n people in r seats we have to find the value of n!/(n-r)!.The value of 5!/(5-3)! Is 60.

// Example 2:
// Input: N=6,r = 4.
// Output: 360

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function permutations(N, R) {
    if (R > N) return 0; // Not enough people to fill the seats
    return factorial(N) / factorial(N - R);
}

// Example usage:
const N = 5; // Number of people
const R = 3; // Number of seats
console.log(permutations(N, R)); // Output: 60
