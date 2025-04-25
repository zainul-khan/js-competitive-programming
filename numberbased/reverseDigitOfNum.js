function reverseDigitOfNum(num) {
    let lastDigit, rev = 0;
    while (num !== 0) {
        lastDigit = num % 10;
        console.log('lastDigit', lastDigit);
        rev= rev * 10 + lastDigit;
        console.log('rev', rev);
        num = Math.floor(num / 10);
        console.log('num', num);
    }
    return rev;
}

let summ2 = reverseDigitOfNum(9312)
console.log(summ2)
