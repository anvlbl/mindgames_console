const readLine = require('readline-sync');

const guessNumber = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 10000);
const length = String(guessNumber).length;

console.log(`My guessed number contains ${length} digits`);
console.log(guessNumber);

while (true) {

const query = readLine.question("test message: ");
  if (+query === guessNumber) {
    console.log("you win! number whats i guess is really " + guessNumber);
    break;
  }

console.log(`return your ${query}`);

}
