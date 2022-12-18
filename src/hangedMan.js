/*this function checks if the user input is only a letter and one character long */
const checkGuessValidity = (guess) => {
  if (guess.length === 1 && guess.match(/[a-zA-Z]/)) {
    guess = guess.toLowerCase(); // not case sensitive
    return true;
  } else {
    alert("The guess is invalid. Please enter only one letter.");
    return false;
  }
};

/*this function gets a random word from the global words array*/
const chooseRandomWord = (wordsArray) => {
  theChosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  return theChosenWord;
};

/*this function checks if the guessed letter is part of the word*/
const isGuessInsideWord = (guess) => {
  if (chosenWord.includes(guess)) {
    alert("Correct guess!");
    return guess;
  } else {
    alert("Wrong guess!");
    usedLetters.push(guess);
    document.getElementById("usedLetters").innerHTML = usedLetters;
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
  let winningMessage = `You won! the word was: ${chosenWord}`;
  document.getElementById("gameOver").innerHTML = winningMessage;
  numGuesses = 0;
  playAgainMessage();
};

// this function tells the user if they won
const loserMessage = () => {
  let losingMessage = `You lost! the word was: ${chosenWord}`;
  document.getElementById("gameOver").innerHTML = losingMessage;
  playAgainMessage();
};

const playAgainMessage = () => {
  document.getElementById("playAgain").innerHTML = "Play Again?";
  let yesBtn = document.createElement("button");
  yesBtn.className = "btn btn-success";
  yesBtn.innerHTML = "Yes";
  document.body.appendChild(yesBtn);
  let noBtn = document.createElement("button");
  noBtn.className = "btn btn-danger";
  noBtn.innerHTML = "No";
  document.body.appendChild(noBtn);
};

let numGuesses = 3;
document.getElementById("numGuesses").innerHTML = numGuesses;

let words = [
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
document.getElementById("chosenWord").innerHTML = chosenWord;
let hiddenWord = chosenWord.replace(/[a-zA-Z]/g, "*");
document.getElementById("hiddenWord").innerHTML = hiddenWord;

const guessHandler = () => {
  let guess = document.getElementById("guess").value.toLowerCase();
  if (guess === chosenWord) {
    winnerMessage();
  } else if (checkGuessValidity(guess)) {
    let correctGuess = isGuessInsideWord(guess);
    numGuessesCalculator(correctGuess);
    hiddenWordPrinter(correctGuess);
  } if (numGuesses === 0 && hiddenWord.includes("*") === true) {
    loserMessage();
  }
  // winnerOrLoserMessage();
};
