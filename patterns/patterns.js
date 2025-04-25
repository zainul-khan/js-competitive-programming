const num = 5;

console.log("ALLSTARS")
for (let i = 1; i <= num; i++) {
    let str = "";  // Reset the string for each row
    for (let j = 1; j <= num; j++) {
        str += "*";  // Add one star per column
    }
    console.log(str);  // Print the full row
}

console.log("HALFPYRAMIDSTARS")
let str2 = "";
for (let i = 1; i <= num; i++) {
    str2 += "*"
    console.log(str2)
}

console.log("HALFPYRAMIDNUMBERS")
let str3 = "";
for (let i = 1; i <= num; i++) {
    str3 += i
    console.log(str3)
}

console.log("HALFPYRAMIDSAMEROWNUMBERS")
for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += i;  // Add one star per column
    }
    console.log(str)
}

console.log("REVERSESTARS");
for (let i = 5; i >= 1; i--) {
    let str4 = "";  // Reset the string for each row
    for (let j = 1; j <= i; j++) {
        str4 += "*";  // Add one star per column
    }
    console.log(str4)
}

console.log("FULLPYRAMID")
// Number of rows
const rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';

    // Add spaces for alignment
    for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
    }

    // Add stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
    }

    console.log(pattern);
}

console.log("FULLPYRAMIDREVERSE")
// Number of rows
const rows2 = 5;

for (let i = rows; i >= 1; i--) {
    let pattern = '';

    // Add spaces for alignment
    for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
    }

    // Add stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
    }

    console.log(pattern);
}

console.log("BinaryNumPyramid")
let str4 = ''
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            str += '1'; // Append '1' for even (i + j)
        } else {
            str += '0'; // Append '0' for odd (i + j)
        }
    }
    console.log(str);
}

console.log("NUMADD")
let currentNumber = 1;

for (let i = 1; i <= 5; i++) { // Outer loop for rows
    let row = '';
    for (let j = 1; j <= i; j++) { // Inner loop for numbers in each row
        row += currentNumber; // Append the current number to the row
        currentNumber++; // Increment the number for the next position
    }
    console.log(row); // Print the row
}

console.log("Letter triangle")
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j); // Append the letter
    }
    console.log(row);
}
