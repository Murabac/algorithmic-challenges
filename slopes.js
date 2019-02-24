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

// Complete the countingValleys function below.
function countingValleys(n, s) {

    let seaLevel = 0; // stores when ever the hiker is on  flat land
    let vallies = 0; // a counter for each valley the hiker goes through

    // a loop that itirates through the elements of the string each at a time
    for (let i in s) {
//checks if the string is equeal to Upper land if true increase the sealevel else decrease the sealevel;
        if (s.charAt(i)== "U") {
            seaLevel = seaLevel + 1;
        }
        else {
            seaLevel = seaLevel -1;
        }
    //another condition that checks if the sea level is on flat land if true and the hiker goes up that means he went throu a valley so increase the valley by one
        if (seaLevel === 0 && s.charAt(i) === "U") {
            vallies++;
        }
    }
    return vallies; // retunr th enumber of the valleis he went through;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
