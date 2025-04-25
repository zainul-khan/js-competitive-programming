function calculateSum1(num) {
    let strNum = String(num);
    let strSum = 0;
    for(let i = 0; i < strNum.length; i++) {
        strSum += Number(strNum[i])
    }
    return strSum
}

let summm = calculateSum1(9312)
console.log(summm)

function calculateSum2(num) {
    let lastDigit, sum = 0;
    while (num !== 0) {
        lastDigit = num % 10;
        console.log('lastDigit', lastDigit);
        sum += lastDigit;
        console.log('sum', sum);
        num = Math.floor(num / 10); // Updated num correctly by removing last digit
        console.log('num', num);
    }
    return sum;
}

let summ2 = calculateSum2(9312)
console.log(summ2)
