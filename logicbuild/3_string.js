//remove vowels from string

let str = 'zainulkhan';
let newStr = '';
let vowels = 'aeiou'

// for (let i = 0; i < str.length; i++) {
//     if(!vowels.includes(str[i])) {
//         newStr += str[i]
//     }
// }

// console.log(newStr)

str = str.replace(/[aeiouAEIOU]/g, '');

console.log(str)