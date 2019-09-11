//I honestly still dont know what I'm doing with this Javascript, There's all types of problems with my event script, IF and the function.

var TVshows = 
["Martin", 
"Living Single",
"Moesha", 
"Fresh Prince of Bel-Air",
"Sister, Sister", 
"In Living Color", 
"Family Matters", 
"The Wayans Bros"];

document.onkeyup = function(event) {

}


if ((userGuess === "Martin")) || (userGuess === "Living Single") || (userGuess === "Moesha") (userGuess === "Fresh Prince of Bel-Air")
    (userGuess === "Sister, Sister") (userGuess === "In Living Color") (userGuess === "Family Matters") (userGuess === "The Wayans Bros"))
var correct = 0;
var wrong = 0;
var directions = document.getElementsByClassName("directions");
var TvChoices = document.getElementsByClassName("")

var choice = Math.floor(Math.random()*8);
var answer = TVshows[choice];
var myLength = answer.length;
var dispaly=[myLength];
var win = myLength;
var letters = answer.split('');
var attempsLeft= 30;
var output="";
var userLetter="";

var setup = function() {
    for (var i = 0; i < answer.length; i++) {
        dispaly[i] = "_";
        output = output + dispaly[i];
    }
    
}
document.getElementsByClassName("TVShows").innerHTML = output;
output ="";
}

window.onload = function()
{
    setup();
}



