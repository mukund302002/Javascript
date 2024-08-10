let randomnumber = parseInt(Math.random()*10 + 1)

const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lastResult')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevguess = []
let numguess = 1

let playagame = true

if (playagame) {
  submit.addEventListener('click', function (e) {
   e.preventDefault();
   let input = parseInt(userinput.value)
   validate(input)
  });
}

function validate(guess)
{
  if (isNaN(guess))
  {
    alert(`please enter a valid number`)
  }
  else if (guess<1)
  {
    alert(`please enter a bigger number`)
  }
  else if (guess >100)
  {
    alert(`please enter a smaller number`)
  }
  else{
    prevguess.push(guess)
    if (numguess>=11)
    {
      clean(guess)
      display(`Game over. the random number was ${randomnumber}`)
      endgame()
    }
    else{
      clean(guess)
      check(guess)

    }
  }
}

function check(guess)
{
  if(guess===randomnumber)
  {
    display(`you guessed it right`)
    clean(guess)
    endgame(guess)
  }
  else if (guess>randomnumber ){
    display(`number is very high`)
  }
  else if (guess<randomnumber ){
    display(`number is very low`)
  }
}

function clean(guess)
{
  userinput.value = ''
  guessslot.innerHTML += `${guess},  `
  numguess++;
  remaining.innerHTML = `${11 - numguess} `;

}

function display(message)
{
  loworhi.innerHTML= `<h2>${message}</h2>`
}

function endgame()
{
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playagame  = false;
  newgame();
}

function newgame()
{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    playGame = true;
  });
}
