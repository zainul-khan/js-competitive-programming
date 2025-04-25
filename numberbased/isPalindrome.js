//check wheater a given number is palindrome or not

                            
// Function to check if a
// given integer is a palindrome
function palindrome(num) {
    // Initialize a variable to
    // store the reverse of the number
    let revNum = 0;
    // Create a duplicate variable to
    // store the original number
    let origNum = num;
    // Iterate through each digit of
    // the number until it becomes 0
    while (num > 0) {
        // Extract the last
        // digit of the number
        let lastDigit = num % 10;
        // Build the reverse number
        // by appending the last digit
        revNum = (revNum * 10) + lastDigit;
        // Remove the last digit
        // from the original number
        num = Math.floor(num / 10);
    }
    // Check if the original number
    // is equal to its reverse
    if (origNum == revNum) {
        // If equal, return true
        // indicating it's a palindrome
        return true;
    } else {
        // If not equal, return false
        // indicating it's not a palindrome
        return false;
    }
}

// Main function
function main() {
    let number = 4554;

    if (palindrome(number)) {
        console.log(number + " is a palindrome.");
    } else {
        console.log(number + " is not a palindrome.");
    }
}

// Calling the main function
main();
                            
                        