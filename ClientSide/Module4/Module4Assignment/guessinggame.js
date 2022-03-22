var counter =0;
function yourGuess() {
    
    // guesses textarea in local function variables.
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
     counter += 1;
    // First, if the guess is the same, just show the answer.
    // Append onto the textarea the result.
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")" + " you took "+ counter + " tries";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}

/*function showNumberToGuess() {
    // Show the randomly generated number if the onclick event
    // fires and the checkbox is check; otherwise, remove the
    // number and hide using display: none;.
    if (document.getElementById('cheat').checked) {
        document.getElementById('numberToGuess').value = numToGuess;
        document.getElementById('cheatShow').style.display = 'inline';
    } else {
        document.getElementById('numberToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}*/

// Randomly generate a number
function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");

    // First, confirm this is what we want if the confirmIt
    // argument was passed.
    if (confirmIt && !confirm('Restart game with new number?')) {
        return;
    }

    guesses.value = '';
    numToGuess = Math.floor(Math.random()*500);
    guesses.value = "New number generated.\n";

    // Don't forget to hide the new number.
   document.getElementById('numberToGuess').value = '';
   // document.getElementById('cheatShow').style.display = 'none';
}

function showGuesses(){
    var guesses = document.getElementById('guesses');
    var btn = document.getElementById('showguesses');
   
    if (guesses.style.display != 'block') {
        guesses.style.display = 'block';
        btn.value = 'Hide My Guesses';
    } else {
        guesses.style.display = 'none';
        btn.value = 'Show My Guesses';
    }

}

window.onload = function(){
    generateNumberToGuess();
}