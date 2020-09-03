// var TVshows = 
// ["Martin", 
// "Living Single",
// "Moesha", 
// "Fresh Prince of Bel-Air",
// "Sister, Sister", 
// "In Living Color", 
// "Family Matters", 
// "The Wayans Bros"];

// document.onkeyup = function(event) {

// }


// if ((userGuess === "Martin")) || (userGuess === "Living Single") || (userGuess === "Moesha") (userGuess === "Fresh Prince of Bel-Air")
//     (userGuess === "Sister, Sister") (userGuess === "In Living Color") (userGuess === "Family Matters") (userGuess === "The Wayans Bros"))
// var correct = 0;
// var wrong = 0;
// var directions = document.getElementsByClassName("directions");
// var TvChoices = document.getElementsByClassName("")

// var choice = Math.floor(Math.random()*8);
// var answer = TVshows[choice];
// var myLength = answer.length;
// var dispaly=[myLength];
// var win = myLength;
// var letters = answer.split('');
// var attempsLeft= 30;
// var output="";
// var userLetter="";

// var setup = function() {
//     for (var i = 0; i < answer.length; i++) {
//         dispaly[i] = "_";
//         output = output + dispaly[i];
//     }
    
// }
// document.getElementsByClassName("TVShows").innerHTML = output;
// output ="";
// }

// window.onload = function()
// {
//     setup();
// }


// alert("webpage loaded");

var showGuessGame = {


    showsToPick: {
        girlfriends: {
            picture: "Girlfriends.png",
            name: "Girlfriends"
        },
        insecure: {
            picture: "insecure.jpg",
            name: "Insecure"
        },
        thegame: {
            picture: "the-game.jpg",
            name: "The Game"
        },
        blackish: {
            picture: "Blackish.jpg",
            name: "Black-ish"
        },
        grownish: {
            picture: "grownish.jpg",
            name:"Grown-ish"
        },
        livingSingle: {
            picture: "living-single.jpg",
            name:"Living Single"
        },
        mywifeandkids: {
            picture: "wife-and-kids.jpg",
            name:"My Wife and Kids"
        },
        thejeffersons: {
            picture: "the-jeffersons.jpg",
            name:"The Jeffersons"
        },
        martin: {
            picture: "Martin-Show.jpg",
            name: "Martin"
        },
        freshprinceofbelair: {
            picture: "fresh-prince-of-bel-air.jpg",
            name: "The Fresh Prince Of Bel-Air"
        },
        adifferentworld: {
            picture: "a-different-world.jpg",
            name:"A Different World"
        },
        goodtimes: {
            picture: "goodtimes.jpg",
            name: "Good Times"
        }
        
    },


    showInPlay: null,
    lettersOfShow: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    startGame: function() {
        var keys = Object.keys(this.showsToPick);
        this.showInPlay = keys[Math.floor(Math.random() * keys.length)];

        this.lettersOfShow = this.showInPlay.split("");


        this.rebuildWordView();

        this.processUpdateTotalGuesses();
    },

    
    updatePage: function(letter) {

        if (this.guessesLeft === 0) {
            this.restartGame();
        }
        else {
            this.updateGuesses(letter);

            this.updateMatchedLetters(letter);

            this.rebuildWordView();

            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },


    updateGuesses: function(letter) {

        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfShow.indexOf(letter) === -1)) {
            

            this.guessedLetters.push(letter);

            this.guessesLeft--;

            document.querySelector("#guesses-remain").innerHTML = this.guessesLeft;
            document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
        }
    },

    processUpdateTotalGuesses: function() {
        this.totalGuesses = this.lettersOfShow.length + 5;
        this.guessesLeft = this.totalGuesses;

        document.querySelector("#guesses-remain").innerHTML = this.guessesLeft;

    },

    updateMatchedLetters: function(letter) {
        for (var i = 0; i < this.lettersOfShow.length; i++) {
            if ((letter === this.lettersOfShow[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }

        // document.querySelector("#current-show").innerHTML = wordView;

    },

    rebuildWordView: function() {
        var wordView = "";

        for (var i = 0; i < this.lettersOfShow.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfShow[i]) !== -1) {
                wordView += this.lettersOfShow[i];
            }
            else {
                wordView += "&nbsp;_&nbsp;";
            }
        }
        document.querySelector("#current-show").innerHTML = wordView;
    },

    restartGame: function() {
        document.querySelector("#guessed-letters").innerHTML = "";
        showInPlay = null;
        lettersOfShow = [];
         matchedLetters = [];
         guessedLetters = [];
         guessesLeft = 0;
         totalGuesses = 0;
         letterGuessed = null;
         wins = 0;
         this.startGame();
         this.rebuildWordView();
    },

    updateWins: function() {
        var win;

        if (this.matchedLetters.length === 0) {
            win = false;
        }
        else {
            win = true;
        }

        for (var i = 0; i < this.lettersOfShow.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfShow[i] === -1)) {
                win = false;
            }
        }

        if (win) {
            this.wins = this.wins + 1;
            document.querySelector("#wins-div").innerHTML = this.wins;

            document.querySelector("#show-img").innerHTML = this.showsToPick[this.showInPlay].picture;
            
            //code for song......"maybe"
            //----------------------------------------------------------

            return true;

        }
        return false;
    }
    // restartGame = function() {
    //     document.querySelector("#")
    // }
};

showGuessGame.startGame();

document.onkeyup = function(event) {
    if (event.keyCode >= 49 && event.keyCode <= 90) {
        showGuessGame.letterGuessed = event.key.toLocaleLowerCase();

        showGuessGame.updatePage(showGuessGame.letterGuessed);
        console.log("key was pressed, game started");
    }
};