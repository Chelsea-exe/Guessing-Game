var letters = ["a", "b", "c"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 15;

var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
  document.querySelector("#left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector("#so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  guessesLeft = 15;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  guessesLeft--;

  var letter = event.key.toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();


  if (letter === letterToGuess) {

    wins++;
    document.querySelector("#wins").innerHTML = wins;

    reset();
  }

  if (guessesLeft === 0) {

    losses++;
    document.querySelector("#losses").innerHTML = losses;

    reset();
  }
};