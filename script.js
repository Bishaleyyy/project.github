let button = document.getElementById ('btn')
let guess = document.getElementById ('user-guess')
let triesLeft = document.getElementById ('tries')
let prevGuess = document.getElementById ('prev-guess')
let message = document.getElementById ('messange')
let victoryImage = document.getElementById ('image')
let hint = document.getElementById ('hint')
let randomNumber = '';
let tries = 5;
let prevGuesses = [];


window.onload =(Event) => {
    randomNumber = parseInt(Math.random() * 101)
    console.log (randomNumber);
}

button.addEventListener('click', function(){
    if(tries > 0){
        if(guess.value == ''){
            alert("Please enter any number");
        }
        else if(parseInt(guess.value) == randomNumber){
            victoryImage.style.display = 'block';
            hint.innerHTML = "";
        
        }
        else if(+guess.value > randomNumber){
            prevGuesses.push(guess.value)
            prevGuess.innerHTML=prevGuesses;
            hint.innerHTML = "Your guess is higher than the actual number.";
            tries -= 1;
            triesLeft.innerHTML = tries;
        }
        else{
            prevGuesses.push(guess.value)
            prevGuess.innerHTML=prevGuesses;
            hint.innerHTML = "Your guess is lower than the actual number.";
            tries -=1;
            triesLeft.innerHTML = tries;
        }
    }
    else{
        button.disabled = true;
    }
}) ;


