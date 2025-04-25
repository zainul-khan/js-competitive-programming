function areAnagrams(str1, str2) {
    // Helper function to count character frequencies
    const getCharFrequency = (str) => {
        const freqMap = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        return freqMap;
    };

    // Remove whitespace and convert to lower case
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if lengths are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Get frequency maps for both strings
    const freqMap1 = getCharFrequency(str1);
    const freqMap2 = getCharFrequency(str2);

    // Compare frequency maps
    for (let char in freqMap1) {
        if (freqMap1[char] !== freqMap2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";
const result = areAnagrams(string1, string2);
console.log(result); // true
