'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    ar = ar.sort(); // sorting the array to make the pairs next to each other
    let counter = 0; // will hold  the counter that counts the pair of socks

    // a simple loop that loops through the socks array
    for (let i = 0; i < ar.length; i++){
    //if  the two array elemnts next to eachother are equal increase the counter by one
        if (ar[i] === ar[i + 1]) {
            counter++
            i++  // this aloows us to skip the ittiration
        }
    }
    return counter
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
