alert("You are playing Byron's Word Guess Game! Good Luck!")

var words = [
    "rhino",
    "spiderman",
    "balloon",
    "flapjack",
    "wednesday",
    "oboe"
]
//should pick random word from designated array
var word = words[Math.floor(Math.random()* words.length)]
//should match the number of blanks to be guessed to the length of the word
var answerBlanks = [];
for (var i=0; i < word.length; i++) {
    answerBlanks[i] = "_";
}
var blanksRemaining = word.length;

while(blanksRemaining > 0) {
    //Game Code
    prompt(answerBlanks.join(" "));
    // player input
    var guess = innerHtml("")

    //update array and show progress
}





