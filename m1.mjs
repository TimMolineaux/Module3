import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
let getal = 0;

do{
    getal = parseFloat(await userInput.question("Vul een getal in (0 om te stoppen): "));
    som += getal;
}while (getal != 0);

console.log(`De som van deze getallen is : ${som}`);

process.exit();