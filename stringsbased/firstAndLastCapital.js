//Captilize first and last word

function capitalizeFirstAndLast(str) {
    return str.split(' ').map(word => {
        // If the word is empty or has only one character, return it as is
        if (word.length <= 1) return word.toUpperCase();
        
        // Capitalize the first and last characters and keep the middle part as is
        const firstChar = word[0].toUpperCase();
        const lastChar = word[word.length - 1].toUpperCase();
        const middlePart = word.slice(1, -1);
        
        return firstChar + middlePart + lastChar;
    }).join(' ');
}

// Example usage
const exampleString = "hello world from javascript";
const result = capitalizeFirstAndLast(exampleString);
console.log(result); // "HellO WorlD FroM JavaScripT"

//OR
let name = 'billu';
name = name.split('')
const firstWordIdx = 0;
const lastWordIdx = name.length - 1
for (let i = 0; i < name.length; i++) {
    if (i === firstWordIdx || i === lastWordIdx) {
        name[i] = name[i].toUpperCase()
    }
}

console.log('solved', name.join(''))

