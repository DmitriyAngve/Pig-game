'use strict';
//Selecting elements (Global variables)
const score0El = document.querySelector('#score--0'); // # - selector for ID
const score1El = document.getElementById('score--1'); // only for ID getElementBuId - faster then querySelector

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Lets do something of them
score0El.textContent = 0;
score1El.textContent = 0; // we are specifying numbers, not string, JavaScript will automatically convert them to strings
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // now we can set it to a string and that string will then be the name of the imae displayed. Dynamically load one of the six images

  // 3.Check for rolled 1: if true
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
  } else {
    // Switch to next player
  }
});
