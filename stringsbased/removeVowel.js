// Program to remove all vowels from string
function removeVowels(str) {
    // Define a regular expression to match all vowels (both lowercase and uppercase)
    const vowelsRegex = /[aeiouAEIOU]/g;

    // Use the replace method to remove all vowels
    return str.replace(vowelsRegex, '');
}

// Example usage
const inputString = "Hello World";
const result = removeVowels(inputString);

console.log(result); // Output: "Hll Wrld"

//without regex
function removeVowels2(str) {
    // Define a set of vowels
    const vowels = new Set('aeiouAEIOU');
    
    // Initialize an empty result string
    let result = '';
    
    // Loop through each character in the input string
    for (const char of str) {
        // If the character is not a vowel, add it to the result string
        if (!vowels.has(char)) {
            result += char;
        }
    }
    
    return result;
}

// Example usage
const inputString2 = "Hello World";
const result2 = removeVowels(inputString2);

console.log(result2); // Output: "Hll Wrld"
