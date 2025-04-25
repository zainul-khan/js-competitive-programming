const myArr = [6, 2, 28, 1]

for (let i = 0; i < myArr.length; i++) {
    let divisorsum = 0;

    for(let j = 1; j < myArr[i]; j++ ) {
        if (myArr[i] % j === 0 ) {
            divisorsum = divisorsum + j
        }
    }
    if(divisorsum === myArr[i]) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}