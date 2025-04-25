//loop over string on even indexes

const str = 'Hello World';
// let newStr = ''
function checkEven(idx) {
    if (idx % 2 === 0) {
        return true;
    }
}

for (let i=0; i < str.length; i++) {
    if (checkEven(i)) {
        console.log(str[i])
    }
}


