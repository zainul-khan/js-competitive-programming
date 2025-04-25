//count number of occurances of each letter

const word = 'Hello Word Javascript';

const map = new Map();

for (let i = 0; i < word.length; i++) {
    if (map.has(word[i])) {
        let currentCount = map.get(word[i]);
        map.set(word[i], currentCount = currentCount + 1)
    } else {
        map.set(word[i], 1);
    }
}

console.log('sol', map)