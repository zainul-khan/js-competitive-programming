function greatestOfThree(num1, num2, num3) {

    // return Math.max(num1, num2, num3)
    if (num1 > num2 && num1 > num3) {
        console.log(`Greates num is num1: ${num1}`)
    } else if (num2 > num3) {
        console.log(`Greates num is num2: ${num2}`)
    } else {
        console.log(`Greates num is num3: ${num3}`)
    }

}

greatestOfThree(3.8, 3.6, 4)