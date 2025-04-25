//count number of words in a str

const sentence = 'My name is zainul';
let wordCounter = 1;

for (let i=0; i<sentence.length; i++) {
    if(sentence[i] === ' ') {   
        wordCounter = wordCounter + 1;
    }
}

console.log(wordCounter);

const splittedSentence = sentence.split(' ');
console.log('arr', splittedSentence);
console.log('ans', splittedSentence.length);