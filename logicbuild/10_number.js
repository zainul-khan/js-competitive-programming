//calculate armstrong number

const num = 153;

//total digit = 3
//1^3 + 5^3 + 3^3
// 3 + 125 + 27 = 153 // this is an armstrong number


function isArmStrong (num) {

    let sum = 0;
    let lengthOfDigits = String(num).length;
    let tempNum = num;

    while (tempNum > 0) {
        let lastDigit = tempNum % 10; //dividing any number by 10 gives the last digit of that number
        sum += Math.pow(lastDigit, lengthOfDigits);
        tempNum = Math.floor(tempNum / 10);
    }

    console.log('sum', sum)
    if (sum === num) {
        console.log('Its an armstrong number')
    } else {
        console.log('No its not an armstrong number')
    }
}

isArmStrong(num)