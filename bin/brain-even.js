#!/usr/bin/env node

import {run} from "../src/cli.js";
import readlineSync from "readline-sync";

const name = run();

function play() {
    let n = Math.floor(Math.random() * 100);
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');

    const isValidAnswer = (answer === 'yes' || answer === 'no') && (n % 2 === 0 ? 'yes' : 'no') === answer;

    if (!isValidAnswer) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, Bill!`);
        return false;
    } else {
        console.log(`Correct!`);
        return true;
    }
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameResult = play() && play() && play();
if (gameResult === true) {
    console.log(`Congratulations, ${name}!`);
}