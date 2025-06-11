let randomNumber = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesseSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Plases enetr valid number");
  } else if (guess < 1) {
    alert("Plases enetr a number Greter then 1");
  } else if (guess > 100) {
    alert("Plases enetr a number less than 100");
  }
  prevGuess.push(guess);

  if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`Game Over, Random Number is ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is low");
  } else if (guess > randomNumber) {
    displayMessage("Number is High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesseSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesseSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
