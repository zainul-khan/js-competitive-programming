//An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.


function isArmstrong(num) {

    let lastDigit, digitCount = 0, sum = 0;
    
    let originalNum = num;
    while(num !== 0) {
        //take out last digit from each num
        lastDigit = num % 10;
        //update the count
        digitCount = digitCount + 1;
        //remove the digit
        num = Math.floor(num / 10)
    }

       // Reset originalNum for the next calculation
       num = originalNum;

       // Calculate the sum of the digits raised to the power of digitCount
       while (num !== 0) {
           lastDigit = num % 10;
           sum += Math.pow(lastDigit, digitCount);
           num = Math.floor(num / 10);
       }
   
       // Check if the sum is equal to the original number
    console.log(sum === originalNum);
}

isArmstrong(153)