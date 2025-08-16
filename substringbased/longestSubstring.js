function longestUniqueSubstring(str) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;
    let maxSubstring = "";

    for (let right = 0; right < str.length; right++) {
        const char = str[right];

        // If character is already in the set, move left pointer to remove duplicates
        while (seen.has(char)) {
            seen.delete(str[left]);
            left++;
        }

        seen.add(char);

        // Update max values if current window is longer
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            maxSubstring = str.slice(left, right + 1);
        }
    }

    return {
        length: maxLength,
        substring: maxSubstring
    };
}
console.log(longestUniqueSubstring("abcabcbb"));
// { length: 3, substring: 'abc' }

console.log(longestUniqueSubstring("bbbbb"));
// { length: 1, substring: 'b' }

console.log(longestUniqueSubstring("pwwkew"));
// { length: 3, substring: 'wke' }

console.log(longestUniqueSubstring(""));
// { length: 0, substring: '' }
