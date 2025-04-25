//reverse string

//Using stack
function reverseStringUsingStack(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;

}

const sol1 = reverseStringUsingStack('zainul')
console.log(sol1)


//Using 2 pointers
function reverseStringUsingTwoPointers(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    return str;
}
const sol2 = reverseStringUsingStack('zainulkhan')
console.log(sol2)


//Using built in function
function reverseStringUsingLibrary(str) {
    return str.split('').reverse().join('');
}

//Use simple loop
function reverseStringUsingTempVariable(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
