//sum of digit of number

let num = 123;
let sum = 0;

while(num > 0) {
    let lastDigit = num % 10; // picked the last digit
    console.log('lastDigit', lastDigit);
    sum = sum + lastDigit; // added it to sum total
    num = Math.floor(num / 10); //divide it to remove the last digit VERY IMP STEP
    console.log('updateNum', num)
}

console.log(sum)