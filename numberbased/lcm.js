function findGcd(n1, n2) {
    while (n2 !== 0) {
        let temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    return n1;
}

function findLcm(n1, n2) {
    if (n1 === 0 || n2 === 0) return 0; // LCM is 0 if either number is 0
    const gcd = findGcd(n1, n2);
    console.log('gcd', gcd)
    return Math.abs(n1 * n2) / gcd; // Calculate LCM using GCD
}

// Main function
function main() {
    let n1 = 20, n2 = 15;
    
    // Find the LCM of n1 and n2
    let lcm = findLcm(n1, n2);

    console.log("LCM of " + n1 + " and " + n2 + " is: " + lcm);
}

// Call the main function
main();
