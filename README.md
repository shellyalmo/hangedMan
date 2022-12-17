# hangedMan
HangedMan game written with vanilla Javascript, as part of my FullStack Bootcamp precourse assignment

The program generates a random word from an existing words archive and hides its letters by asterisks.
The program gets from the user an input which has to be either a single letter guessed or the entire correct word guessed.
If the input is neither of those, the user sees a warning message.
Then the program checks if the single letter appears inside the random generated word (by string method).
If so, the program reveals the correct letter in the hidden word and replaces the asterisk with the correct letter.
If the guessed letter isn't correct, the program reduces the amount of guesses the user has and alerts the user.
Finally, the program tells the user if they won, or lost and shows what the word was.
