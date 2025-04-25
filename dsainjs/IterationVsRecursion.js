function iterativeSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(iterativeSum(5));  // Output: 15

function recursiveSum(n) {
    if (n === 1) {
        return 1;  // Base case
    }
    return n + recursiveSum(n - 1);  // Recursive case
}

console.log(recursiveSum(5));  // Output: 15

/***************************************************************************************************************************** */

function iterativeFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(iterativeFactorial(5));  // Output: 120


function recursiveFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case
    }
    return n * recursiveFactorial(n - 1);  // Recursive case
}

console.log(recursiveFactorial(5));  // Output: 120

/***************************************************************************************************************************** */


function iterativeFibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(iterativeFibonacci(5));  // Output: 5


function recursiveFibonacci(n) {
    if (n <= 1) {
        return n;  // Base case
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);  // Recursive case
}

console.log(recursiveFibonacci(5));  // Output: 5


/***************************************************************************************************************************** */
