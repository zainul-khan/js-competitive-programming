//Greatest common divisor

const num1 = 10;
const num2 = 100;

// find the greatest number that perfectly divides the num1 and num2 and leave reminder as 0.

function findGcd(num1, num2) {

    let gcd = 1; //1 is the divisor of all number natural numbers

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i
        }
    }

    console.log(`Gcd of ${num1} and ${num2} is ${gcd}`)
}

findGcd(num1, num2);
