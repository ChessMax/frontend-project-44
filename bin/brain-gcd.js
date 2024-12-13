#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { run } from '../src/cli.js';

const name = run();

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function play() {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const d = gcd(a, b);
  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  const isValidAnswer = `${d}` === answer;

  if (!isValidAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${d}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
}

console.log('Find the greatest common divisor of given numbers.');
const gameResult = play() && play() && play();
if (gameResult === true) {
  console.log(`Congratulations, ${name}!`);
}
