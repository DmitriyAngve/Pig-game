'use strict';
//Selecting elements (Global variables)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1'); // select player for remove class player--active and ad that class to another player (toggle player)
const score0El = document.querySelector('#score--0'); // # - selector for ID
const score1El = document.getElementById('score--1'); // only for ID getElementBuId - faster then querySelector
const current0El = document.getElementById('current--0'); // lets select the score for player
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Lets do something of them
let scores, currentScore, activePlayer, playing; // declaring a variable

const init = function () {
  scores = [0, 0]; // player 0 at position 0, and player 1 at position 1
  currentScore = 0;
  activePlayer = 0; // we start with the first player 1 (0 - because we use an array)
  playing = true; // variable to lock buttons after win

  score0El.textContent = 0;
  score1El.textContent = 0; // we are specifying numbers, not string, JavaScript will automatically convert them to strings
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // display the currentScore (0)
  currentScore = 0; //reset the currentScore
  activePlayer = activePlayer === 0 ? 1 : 0; //switch player from 0 to 1
  player0El.classList.toggle('player--active'); // toggle player by using player--active class
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // dont need condition (like === true), because playing itself already a Boolean
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // now we can set it to a string and that string will then be the name of the imae displayed. Dynamically load one of the six images

    // 3.Check for rolled 1: if true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // here we do instead select the score element dynamically based on which is the active player right now
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // Display that score after changing by changing the ID

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false; // lock buttons after win
      diceEl.classList.add('hidden'); // add class 'hidden' for hide dice
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // player--winner from CSS
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // remove player--active - Win
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); // function 'init' like value (without ())
