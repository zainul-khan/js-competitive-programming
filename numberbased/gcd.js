                            
function findGcd(n1, n2) {
    // Initialize gcd to 1
    let gcd = 1;

    // Iterate from 1 up to
    // the minimum of n1 and n2
    for (let i = 1; i <= Math.min(n1, n2); i++) { //to make more optimal you can use => let i = Math.min(n1, n2); i > 0; i--
        // Check if i is a common
        // factor of both n1 and n2
        if (n1 % i === 0 && n2 % i === 0) {
            // Update gcd to the
            // current common factor i
            gcd = i;
        }
    }

    // Return the greatest
    // common divisor (gcd)
    return gcd;
}

// Main function
function main() {
    let n1 = 20, n2 = 15;
    
    // Find the GCD of n1 and n2
    let gcd = findGcd(n1, n2);

    console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
}

// Call the main function
main();


                            
                        


//Euclidean


function findGcdUsingEuclidean (n1, n2) {
    // Use the Euclidean algorithm to find GCD
    while (n2 !== 0) {
        let temp = n2;
        n2 = n1 % n2; // Remainder
        n1 = temp; // Update n1
    }
    return n1; // n1 now contains the GCD
}

// Main function
function main2() {
    let n1 = 20, n2 = 15;
    
    // Find the GCD of n1 and n2
    let gcd = findGcdUsingEuclidean(n1, n2);

    console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
}

// Call the main function
main2();
