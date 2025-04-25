// Write a program to remove all characters from a string except alphabets in a given string

function removeNonAlphabets(str) {
    return str.replace(/[^a-zA-Z]/g, '');
  }
  
  // Example usage:
  const inputString = "Hello, World! @123";
  const outputString = removeNonAlphabets(inputString);
  console.log(outputString); // Output: "HelloWorld"

function removeNonAlphabets2(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        result += char;
      }
    }
    return result;
  }
  
  // Example usage:
  const inputString2 = "Hello, World! 123";
  const outputString2 = removeNonAlphabets2(inputString2);
  console.log(outputString2); // Output: "HelloWorld"