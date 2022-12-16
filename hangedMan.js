/* This program is simulating the Hanged Man game. The program generates a random word from an existing words archive
and hides its letters by asterisks.
The program gets from the user an input which has to be either 
a single letter guessed or the entire correct word guessed. If the input is neither of those, the user sees a warning message.
Then the program checks if the single letter appears inside the random generated word (by string method).
If so, the program reveals the correct letter in the hidden word and replaces the asterisk with the correct letter.
If the guessed letter isn't correct, the program reduces the amount of guesses the user has and alerts the user.
Finally, the program tells the user if they won, or lost and shows what the word was.
*/

console.log(
  "%cWelcome to Hang Man!",
  "color:purple;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);

const main = () => {
  /*this function checks if the user input is only a letter and one character long */
  const checkGuessValidity = (guess) => {
    if (guess.length === 1 && guess.match(/[a-zA-Z]/)) {
      guess = guess.toLowerCase(); // not case sensitive
      console.log(guess);
      return true;
    } else {
      console.log("The guess is invalid. Please try again.\n");
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
      console.log("Correct guess!");
      return guess;
    } else {
      console.log("Wrong guess!");
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
    console.log("You have " + numGuesses + " guesses.\n");
    return numGuesses;
  };

  /*this function prints the secret word hidden by asteriks and reveals correct letters*/
  const hiddenWordPrinter = (correctGuess) => {
    for (let j = 0; j < chosenWord.length; j++) {
      if (correctGuess === chosenWord[j]) {
        hiddenWord =
          hiddenWord.substring(0, j) +
          correctGuess +
          hiddenWord.substring(j + 1);
      }
    }

    console.log(hiddenWord);
    return hiddenWord;
  };

  // console.assert("f******" == hiddenWordPrinter("f"));

  /*this function tells the user if they won or lost*/
  const winnerOrLoserMessage = () => {
    if (hiddenWord.includes("*") === false) {
      console.log("Wow you are good!!\nYou won, bye bye!");
      numGuesses = 0;
    } else if (numGuesses <= 0 && hiddenWord.includes("*") === true) {
      console.log("Sorry you lost. The word was " + chosenWord + ".\nBye bye!");
    }
  };

  let numGuesses = 10;
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
  let chosenWord = chooseRandomWord(words);
  let hiddenWord = chosenWord.replace(/[a-zA-Z]/g, "*");

  while (numGuesses > 0) {
    let guess = prompt("What is your guess?") || "";
    if (guess === chosenWord) {
      console.log("Wow you are good!!\nYou won, bye bye!");
      numGuesses = 0;
      break;
    }
    if (checkGuessValidity(guess)) {
      let correctGuess = isGuessInsideWord(guess);
      numGuessesCalculator(correctGuess);
      hiddenWordPrinter(correctGuess);
    } else {
      continue;
    }
    winnerOrLoserMessage();
  }
};

main();
