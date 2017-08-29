var farmAnimals = ["horse", "cow", "pig", "goat", "chicken", "sheep", "donkey", "duck", "llama", "rabbit"];



var Hangman = {
    wordGuess: farmAnimals[Math.floor(Math.random() * farmAnimals.length)],
    lives: 5,
    isCurrentWord: false,
    guessedLetters: "",
    currentWord: "",
    currentWordArray: [],
    newCurrentWord: "",


    decreaseLives: function() {
        Hangman.lives = Hangman.lives - 1;
        alert("You lost a life");
        return Hangman.lives;
    },

    livesCount: function() {
        return Hangman.lives;
    },

    reset: function() {
        Hangman.wordGuess = farmAnimals[Math.floor(Math.random() * farmAnimals.length)];
        Hangman.lives = 5;
        Hangman.isCurrentWord = false;
        Hangman.guessedLetters = "";
        Hangman.currentWord = "";
        Hangman.currentWordArray = [];
    },



    checkLose: function() {
        if (Hangman.lives === 0) {
            alert("You lost!");
            Hangman.reset();
        }
    },

    checkWin: function() {
        if ((Hangman.currentWordArray.indexOf("_ ") ===-1) && Hangman.currentWordArray.join("") === Hangman.newCurrentWord) {
            alert("You won!");
            Hangman.reset();
        }
    },



}


checkString = function(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
}


document.onkeyup = function(event) {

    var wordGuess = Hangman.wordGuess;
    console.log(wordGuess);
    var currentWordBlanks = document.getElementById("current-word");
    var livesBlank = document.getElementById("lives-blank");


    var guessedLettersBlank = document.getElementById("guessed-letters-blank");
    if (Hangman.isCurrentWord === false) {

        for (var i = 0; i < wordGuess.length; i++) {
            Hangman.currentWord = Hangman.currentWord + "_ ";
            Hangman.currentWordArray[i] = "_ ";
        }
        currentWordBlanks.textContent = Hangman.currentWord;
        Hangman.isCurrentWord = true;

    } else {

        livesBlank.textContent = Hangman.lives;
        if (!checkString(event.keyCode)) {
            alert("Please enter an alphabet!");

        } else {
            if (wordGuess.indexOf(event.key) === -1 && Hangman.guessedLetters.indexOf(event.key)===-1) {
                Hangman.decreaseLives();
                Hangman.guessedLetters = Hangman.guessedLetters + " " + event.key;
                guessedLettersBlank.textContent = Hangman.guessedLetters;
                livesBlank.textContent = Hangman.lives;
                Hangman.checkLose();
                guessedLettersBlank.textContent = Hangman.guessedLetters;

            } else {

                for (var i = 0; i < wordGuess.length; i++) {
                    if (wordGuess.charAt(i) === event.key) {
                        Hangman.currentWordArray[i] = event.key;
                        Hangman.newCurrentWord = Hangman.currentWordArray.join("");
                        currentWordBlanks.textContent = Hangman.newCurrentWord;
                        Hangman.checkWin();
						guessedLettersBlank.textContent = Hangman.guessedLetters;
                    }
                }

            }
        }
    }
}