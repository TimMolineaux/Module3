import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 4;

for (let i = 1; i <= hoogte; i++){
    let str = "*";
    let space = " ";
    console.log(space.repeat(hoogte - i) + str.repeat(i * 2 - 1)); 
}
for (let i = hoogte - 1; i >= 1; i--){
    let str = "*";
    let space = " ";
    console.log(space.repeat(hoogte - i) + str.repeat(i * 2 - 1)); 
}

process.exit();

