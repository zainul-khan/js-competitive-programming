//check if word is palindrome

const word = 'abba';
let leftPointer = 0;
let rightPointer = word.length - 1;

while(leftPointer < rightPointer) {
    if(word[leftPointer] !== word[rightPointer]) {
        console.log('No. it\'s not a palindrome')
        break;
    } else {
        console.log('Yes, it\'s a palindrome');
    }
    leftPointer ++;
    rightPointer --;
}
// If the loop completes without finding a mismatch
if (leftPointer >= rightPointer) {
    console.log('Yes, it\'s a palindrome');
}