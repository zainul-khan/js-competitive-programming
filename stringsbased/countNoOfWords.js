//count number of words in string


//Sol 1
const word = 'Hello Word Javascript';

let sol1Count = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
        sol1Count = sol1Count + 1;
    }
}

console.log(sol1Count + 1)

//Sol 2
const sol2Count = word.split(' ').length
console.log(sol2Count)