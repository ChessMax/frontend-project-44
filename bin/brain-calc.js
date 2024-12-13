#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { run } from '../src/cli.js';

const name = run();

function play() {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const c = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  let d = a + b;
  if (c === '-') {
    d = a - b;
  } else if (c === '*') {
    d = a * b;
  }
  console.log(`Question: ${a} ${c} ${b}`);
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

console.log('What is the result of the expression?');
const gameResult = play() && play() && play();
if (gameResult === true) {
  console.log(`Congratulations, ${name}!`);
}
