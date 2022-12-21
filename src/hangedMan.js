/**
 * this function gets a random word from the global words array
 * @param {Array<string>} wordsArray
 * @returns {string}
 */
const chooseRandomWord = (wordsArray) => {
  let theChosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  return theChosenWord;
};
/**
 *this function checks if the guessed letter is part of the word
 * @param {string} guess
 * @returns {boolean}
 */
const isGuessInsideWord = (guess) => {
  if (chosenWord.includes(guess)) {
    addContentHtml("gameStatus", "Correct guess!");
    return true;
  } else {
    addContentHtml("gameStatus", "Wrong guess!");
    return false;
  }
};
/**
 *this function check if the guessed letter was already used before
 * @param {string} guess
 * @returns {boolean}
 */
const wasGuessedBefore = (guess) => {
  if (usedLetters.includes(guess)) {
    addContentHtml(
      "gameStatus",
      "You already guessed that. Please guess a new letter."
    );

    return true;
  } else {
    usedLetters.push(guess);
    return false;
  }
};

// console.assert(true==isGuessInsideWord("f","face"))
// console.assert(false==isGuessInsideWord("1","face"))

/**
 *this function calculates how many guesses the user has
 * @param {boolean} isGuessCorrect
 * @returns {number}
 */
const numGuessesCalculator = (isGuessCorrect) => {
  if (isGuessCorrect === false) {
    numGuesses -= 1;
  }
  addContentHtml("numGuesses", numGuesses.toString());
  return numGuesses;
};

/**
 *
 *this function prints the secret word hidden by asteriks and reveals correct letters
 * @param {string} correctGuess
 * @returns {string}
 */
const hiddenWordPrinter = (correctGuess) => {
  for (let j = 0; j < chosenWord.length; j++) {
    if (correctGuess === chosenWord[j]) {
      hiddenWord =
        hiddenWord.substring(0, j) + correctGuess + hiddenWord.substring(j + 1);
    }
  }

  addContentHtml("hiddenWord", hiddenWord);
  return hiddenWord;
};

// console.assert("f******" == hiddenWordPrinter("f"));

//this function tells the user if they won
const winnerMessage = () => {
  const gameBoardElement = document.getElementById("gameBoard");
  if (gameBoardElement) {
    gameBoardElement.remove();
  }
  let winningMessage = `You won! the word was: ${chosenWord}`;
  addContentHtml("gameOver", winningMessage);
  addContentHtml(
    "resultImage",
    "<img class='img-fluid' src='https://media.tenor.com/xcEIKm1elMUAAAAC/macarena-dance-stick-man.gif'>"
  );
  numGuesses = 0;
  playAgainMessage();
};

// this function tells the user if they lost
const loserMessage = () => {
  document.getElementById("gameBoard")?.remove();
  let losingMessage = `You lost! the word was: ${chosenWord}`;
  addContentHtml("gameOver", losingMessage);
  addContentHtml(
    "resultImage",
    "<img class='img-fluid' src='https://media.tenor.com/u_yuMBHRKREAAAAC/suicide-stick-figure.gif'>"
  );

  playAgainMessage();
};

// this function asks the user if they want to play again and restarts the screen
const playAgainMessage = () => {
  const playAgainElement = document.getElementById("playAgain");
  if (playAgainElement) {
    // addContentHtml("guess").disabled = true;
    addContentHtml("playAgain", "Play Again?");
    let yesBtn = document.createElement("button");
    yesBtn.className = "btn btn-success";
    yesBtn.id = "newGame";
    yesBtn.innerText = "Yes";
    playAgainElement.appendChild(yesBtn);
    let noBtn = document.createElement("button");
    noBtn.className = "btn btn-danger";
    noBtn.id = "stopGame";
    noBtn.innerText = "No";
    playAgainElement.appendChild(noBtn);

    document
      .getElementById("newGame")
      ?.setAttribute("onclick", "location.reload()");
    const stopGameElement = document.getElementById("stopGame");
    if (stopGameElement) {
      stopGameElement.setAttribute("onclick", "byeMessage()");
    }
  }
};

const byeMessage = () => {
  document.getElementById("gameResult")?.remove();
  addContentHtml("bye", "See you next time!");
  addContentHtml("byeImage", "<img class='img-fluid' src='../assets/bye.jpg'>");
};

/**
 * add content on html
 * @param {string} elementId
 * @param {string} message
 */
const addContentHtml = (elementId, message) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = message;
  }
};

let numGuesses = 4;
addContentHtml("numGuesses", numGuesses.toString());

let words = [
  "hello",
  "world",
  "freedom",
  "morning",
  "recursion",
  "burger",
  "object",
  "container",
  "debugger",
  "python",
  "console",
  "network",
  "performance",
];

let usedLetters = [];

let chosenWord = chooseRandomWord(words);
let hiddenWord = chosenWord.replace(/[a-zA-Z]/g, "*");
addContentHtml("hiddenWord", hiddenWord);

const guessHandler = () => {
  const guessInput = document.getElementById("guess");
  if (guessInput && guessInput instanceof HTMLInputElement) {
    let guess = guessInput.value.toLowerCase();
    if (guessInput.disabled === true) {
      addContentHtml("gameStatus", "Game over!");
    } else if (guess === chosenWord && numGuesses > 0) {
      winnerMessage();
    } else if (!wasGuessedBefore(guess)) {
      let correctGuess = isGuessInsideWord(guess);
      if (correctGuess) {
        hiddenWordPrinter(guess);
      }
      numGuessesCalculator(correctGuess);

      if (numGuesses > 0 && hiddenWord.includes("*") === false) {
        winnerMessage();
      } else if (numGuesses === 0 && hiddenWord.includes("*") === true) {
        loserMessage();
      }
    }
    addContentHtml("usedLetters", usedLetters.toString());
    const guessForm = document.getElementById("guessForm");
    if (guessForm instanceof HTMLFormElement) {
      guessForm.reset();
    }
  }
};
