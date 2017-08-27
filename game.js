var farmAnimals = ["horse", "cow", "pig", "goat", "chicken", "sheep", "donkey", "duck", "llama", "rabbit"]




var Hangman = {
    wordGuess: farmAnimals[Math.floor((Math.random() * (farmAnimals.length - 1)) + 1)];
    lives: 5;

    getLives: function() {
        return lives;
    }





}

    document.onkeyup = function(event) {
    	console.log(Hangman.wordGuess);


    }
}