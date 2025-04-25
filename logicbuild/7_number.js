//reverse the digit of number

let num = 123;
let revNum = 0;

while(num > 0) {
    let lastDigit = num % 10;
    // console.log('lastDigit', lastDigit);
    revNum = revNum * 10 + lastDigit;
    // console.log('revNum', revNum)
    num = Math.floor(num / 10)
    // console.log('updated', num)
}

console.log(revNum)