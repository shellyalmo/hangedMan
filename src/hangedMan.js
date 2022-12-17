const main = () => {

  /*this function checks if the user input is only a letter and one character long */
  const checkGuessValidity = (guess) => {
    if (guess.length === 1 && guess.match(/[a-zA-Z]/)) {
      guess = guess.toLowerCase(); // not case sensitive
      alert(guess);
      return true;
    } else {
      alert("The guess is invalid. Please try again.");
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
    alert("You have " + numGuesses + " guesses.\n");
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

    alert(hiddenWord);
    return hiddenWord;
  };

  // console.assert("f******" == hiddenWordPrinter("f"));

  /*this function tells the user if they won or lost*/
  const winnerOrLoserMessage = () => {
    if (hiddenWord.includes("*") === false) {
      alert("Wow you are good!!\nYou won, bye bye!");
      numGuesses = 0;
    } else if (numGuesses <= 0 && hiddenWord.includes("*") === true) {
      alert("Sorry you lost. The word was " + chosenWord + ".\nBye bye!");
    }
  };

  let numGuesses = 1;
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
    
    let guess =" hi"
    // let guess = prompt("What is your guess?") || "";
    if (guess === chosenWord) {
      alert("Wow you are good!!\nYou won, bye bye!");
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

// add bootstrap
//instead of console log - use get element by id, use a printer function that adds a line to the
//DOM element
// prompt is better as form field
