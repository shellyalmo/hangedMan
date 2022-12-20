/*this function gets a random word from the global words array*/
const chooseRandomWord = (wordsArray) => {
  theChosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  return theChosenWord;
};

/*this function checks if the guessed letter is part of the word*/
const isGuessInsideWord = (guess) => {
  if (chosenWord.includes(guess)) {
    document.getElementById("gameStatus").innerHTML = "Correct guess!";

    return guess;
  } else {
    document.getElementById("gameStatus").innerHTML = "Wrong guess!";
    return false;
  }
};

//this function check if the guessed letter was already used before
const wasGuessedBefore = (guess) => {
  if (usedLetters.includes(guess)) {
    document.getElementById("gameStatus").innerHTML =
      "You already guessed that. Please guess a new letter.";

    return true;
  } else {
    usedLetters.push(guess);
    return false;
  }
};

// console.assert(true==isGuessInsideWord("f","face"))
// console.assert(false==isGuessInsideWord("1","face"))

/*this function calculates how many guesses the user has*/
const numGuessesCalculator = (isGuessCorrect) => {
  if (isGuessCorrect === false) {
    numGuesses -= 1;
  }
  document.getElementById("numGuesses").innerHTML = numGuesses;
  return numGuesses;
};

/*this function prints the secret word hidden by asteriks and reveals correct letters*/
const hiddenWordPrinter = (correctGuess) => {
  for (let j = 0; j < chosenWord.length; j++) {
    if (correctGuess === chosenWord[j]) {
      hiddenWord =
        hiddenWord.substring(0, j) + correctGuess + hiddenWord.substring(j + 1);
    }
  }

  document.getElementById("hiddenWord").innerHTML = hiddenWord;
  return hiddenWord;
};

// console.assert("f******" == hiddenWordPrinter("f"));

//this function tells the user if they won
const winnerMessage = () => {
  document.getElementById("gameBoard").remove();
  let winningMessage = `You won! the word was: ${chosenWord}`;
  document.getElementById("gameOver").innerHTML = winningMessage;
  numGuesses = 0;
  playAgainMessage();
};

// this function tells the user if they lost
const loserMessage = () => {
  document.getElementById("gameBoard").remove();
  let losingMessage = `You lost! the word was: ${chosenWord}`;
  document.getElementById("gameOver").innerHTML = losingMessage;
  playAgainMessage();
};

// TODO:this function asks the user if they want to play again and restarts the screen
const playAgainMessage = () => {
  // document.getElementById("guess").disabled = true;
  document.getElementById("playAgain").innerHTML = "Play Again?";
  let yesBtn = document.createElement("button");
  yesBtn.className = "btn btn-success";
  yesBtn.id = "newGame";
  yesBtn.innerHTML = "Yes";
  document.getElementById("playAgain").appendChild(yesBtn);
  let noBtn = document.createElement("button");
  noBtn.className = "btn btn-danger";
  noBtn.id = "stopGame";
  noBtn.innerHTML = "No";
  document.getElementById("playAgain").appendChild(noBtn);

  document
    .getElementById("newGame")
    .setAttribute("onclick", "location.reload()");
  document.getElementById("stopGame").setAttribute("onclick", "byeMessage()");
};

const byeMessage = () => {
  document.getElementById("gameResult").remove();
  document.getElementById("bye").innerHTML = "Bye Bye!";
};

let numGuesses = 4;
document.getElementById("numGuesses").innerHTML = numGuesses;

let words = [
  "hello",
  "world",
  // "freedom",
  // "morning",
  // "recursion",
  // "burger",
  // "object",
  // "container",
  // "debugger",
  // "python",
  // "console",
  // "network",
  // "performance",
];

let usedLetters = [];

let chosenWord = chooseRandomWord(words);
let hiddenWord = chosenWord.replace(/[a-zA-Z]/g, "*");
document.getElementById("hiddenWord").innerHTML = hiddenWord;

const guessHandler = () => {
  let guess = document.getElementById("guess").value.toLowerCase();
  if (document.getElementById("guess").disabled === true) {
    document.getElementById("gameStatus").innerHTML = "Game over!";
  } else if (guess === chosenWord && numGuesses > 0) {
    winnerMessage();
  } else if (!wasGuessedBefore(guess)) {
    let correctGuess = isGuessInsideWord(guess);
    numGuessesCalculator(correctGuess);
    hiddenWordPrinter(correctGuess);
    if (numGuesses > 0 && hiddenWord.includes("*") === false) {
      winnerMessage();
    } else if (numGuesses === 0 && hiddenWord.includes("*") === true) {
      loserMessage();
    }
  }
  document.getElementById("usedLetters").innerHTML = usedLetters;
  document.getElementById("guessForm").reset();
};

//TODO:

// fix: improve UI UX and style
// refactor: clean code
// deploy
// update github and post linkedin
