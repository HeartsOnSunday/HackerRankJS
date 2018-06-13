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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var highest = 0; //prevent odd behaviors by innitializing Zeros!!!
    let count = 0;
    /*for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            highest = arr[i];
            count+= 1; //set zero and use += 
            /* prevent any funky behavior in your variable 
            /use For Each to loop through array of items
            //do not use for loop or .map()
            //using forEach bypasses innitializing an i variable, uses a single variable (candle) and eliminates a set of brackets
            */
            ar.forEach(function(candle, i, ar) { //pass arr by ref
                if (candle > highest){
                    highest = candle;
                    count = 1;
                }else if (candle === highest) {
                    count++;
                } //checks equality and data type 
            })
            return count;
        }
//there is no way to skip the first number in a forEach, instead it would work with a for loop that skips the first interger and starts at the second interger


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10); /* the ten is here for the other languages */

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10)); // converting string of numbers into intergers

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}