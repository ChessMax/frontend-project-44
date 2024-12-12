#!/usr/bin/env node

import {run} from "../src/cli.js";
import readlineSync from "readline-sync";

const name = run();

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function play() {
    let n = Math.floor(Math.random() * 100);
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');

    const isValidAnswer = (answer === 'yes' || answer === 'no') && (isPrime(n) ? 'yes' : 'no') === answer;

    if (!isValidAnswer) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    } else {
        console.log(`Correct!`);
        return true;
    }
}

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gameResult = play() && play() && play();
if (gameResult === true) {
    console.log(`Congratulations, ${name}!`);
}