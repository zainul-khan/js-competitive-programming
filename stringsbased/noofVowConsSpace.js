//Problem Statement: Given a string, write a program to count the number of vowels, consonants, and spaces in that string. In js 

function countCharacters(str) {
    // Initialize counters for vowels, consonants, and spaces
    let vowelCount = 0;
    let consonantCount = 0;
    let spaceCount = 0;

    // Convert the string to lowercase to handle case insensitivity
    str = str.toLowerCase();

    // Define a set of vowels for quick lookup
    const vowels = new Set('aeiou');

    // Loop through each character in the string
    for (const char of str) {
        // Check for spaces
        if (char === ' ') {
            spaceCount++;
        // Check for vowels
        } else if (vowels.has(char)) {
            vowelCount++;
        // Check for consonants (must be a letter and not a vowel)
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    // Return the counts as an object
    return {
        vowels: vowelCount,
        consonants: consonantCount,
        spaces: spaceCount
    };
}

// Example usage
const inputString = "Hello World";
const result = countCharacters(inputString);

console.log(`Vowels: ${result.vowels}`);
console.log(`Consonants: ${result.consonants}`);
console.log(`Spaces: ${result.spaces}`);
