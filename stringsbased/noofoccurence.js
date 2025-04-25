
// count the occurrences of each character in a string

const word = 'zainulkhan'
let wordMap = new Map()
for(let i = 0; i < word.length; i++) {
    if(wordMap.has(word[i])) {
       let currentCount = wordMap.get(word[i]);
       wordMap.set(word[i], currentCount + 1);
    } else {
       wordMap.set(word[i], 1);
    }
}

console.log('wordMap', wordMap)

//tc is O(1)