import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 4;

for (let i = 1; i <= hoogte; i++){
    let str = "*"; 
    console.log(str.repeat(i)); 
}

process.exit();