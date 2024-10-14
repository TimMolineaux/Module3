import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0;
let gemiddelde;
let teller = 1;

do{

    getal += parseFloat(await userInput.question("Vul een getal in: "));
    gemiddelde = getal / teller;
    console.log(gemiddelde);
    teller++;

}while (gemiddelde < 25);

process.exit();