#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { run } from '../src/cli.js';

const name = run();

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function play() {
  const n = Math.floor(Math.random() * 100);
  console.log(`Question: ${n}`);
  const answer = readlineSync.question('Your answer: ');

  const isValidAnswer = (answer === 'yes' || answer === 'no') && (isPrime(n) ? 'yes' : 'no') === answer;

  if (!isValidAnswer) {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
}

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gameResult = play() && play() && play();
if (gameResult === true) {
  console.log(`Congratulations, ${name}!`);
}
