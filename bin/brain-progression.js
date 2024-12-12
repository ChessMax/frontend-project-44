#!/usr/bin/env node

import {run} from "../src/cli.js";
import readlineSync from "readline-sync";

const name = run();

function rnd(max) {
    return Math.floor(Math.random() * max);
}

function rndRange(min, max) {
    return rnd(max - min) + min;
}

function play() {
    const len = rndRange(5, 10);
    const offset = rndRange(1, 30);
    const start = rnd(100);
    let value = start;
    const numbers = [value];
    for (let i = 0; i < len - 1; ++i) {
        value = value + offset;
        numbers.push(value);
    }
    const index = rndRange(0, len);
    const d = numbers[index];

    console.log(`Question: ${numbers.join(' ').replace(`${d}`, '..')}`);
    const answer = readlineSync.question('Your answer: ');

    const isValidAnswer = `${d}` === answer;

    if (!isValidAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${d}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    } else {
        console.log(`Correct!`);
        return true;
    }
}

console.log('What number is missing in the progression?');
const gameResult = play() && play() && play();
if (gameResult === true) {
    console.log(`Congratulations, ${name}!`);
}

 function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}