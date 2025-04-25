//check if string is palindrome
//looping in reverse o(n)

//two pointer approach o(n/2)

let word = 'zacezqcar';

let leftPointer = 0; //increment this
let rightPointer = word.length - 1; //decrement this

while (leftPointer < rightPointer) {
    if (word[leftPointer] === word[rightPointer]) {
        console.log('its a palindrome')
    } else {
        console.log('no its not a palindrome')
        break;
    }

    leftPointer++;
    rightPointer--;    
}