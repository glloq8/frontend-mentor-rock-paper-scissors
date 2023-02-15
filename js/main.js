const ChoicesWrap = document.querySelector('.choices')
const Battle = document.querySelector('.battle')
const Choices = document.querySelectorAll('.choices .choice')
const Score = document.querySelector('.score strong')
const Player = document.querySelector('.battle .you .choice')
const Computer = document.querySelector('.battle .computer .choice')
const Waiting = document.querySelector('.battle .computer .waiting-choice')
const ResultText = document.querySelector('.battle .action .text')
const NewGame = document.querySelector('.battle .action .btn')
const Possibilities = ['rock', 'paper', 'scissors']
let State = 0

if( !localStorage.getItem('score')) {
  localStorage.setItem('score', 0)
}

for (const choice of Choices) {
  choice.addEventListener('click', function() {
    const ComputerChoice = Math.floor(Math.random() * 3)
    
    Player.classList.add(this.getAttribute('rel'))
    Player.setAttribute('rel',this.getAttribute('rel'))

    ChoicesWrap.style.display = "none"
    Battle.style.display = "flex"

    ShowComputerChoice(ComputerChoice)

    if( this.getAttribute('rel') === 'rock' && Possibilities[ComputerChoice] === 'scissors' ) {
      State = 1
      ChangeResult('win')
    } else if( this.getAttribute('rel') === 'scissors' && Possibilities[ComputerChoice] === 'paper' )  {
      State = 1
      ChangeResult('win')
    } else if( this.getAttribute('rel') === 'paper' && Possibilities[ComputerChoice] === 'rock' )  {
      State = 1
      ChangeResult('win')
      
    } else if(this.getAttribute('rel') === Possibilities[ComputerChoice]) {
      State = 0
      ChangeResult('draw')
    } else {
      State = 0
      ChangeResult('lose')
    }
    if( State === 1 ) {
      ChangeScore()
    }
    InitScore()
  })
}

function StartNewGame() {
  ChoicesWrap.style.display = "block"
  Battle.style.display = "none"
  Waiting.style.display = "block"
  Computer.style.display = "none"
  Battle.classList.remove('result')
  Player.classList.remove('rock', 'scissors', 'paper')
  Player.removeAttribute('rel')
  Computer.classList.remove('rock', 'scissors', 'paper')
  Computer.removeAttribute('rel')
}

function ShowComputerChoice(ComputerChoice) {
  setTimeout(() => {
    Waiting.style.display = "none"
    Computer.style.display = "grid"
    Computer.classList.add(Possibilities[ComputerChoice])
    Computer.setAttribute('rel',Possibilities[ComputerChoice])

    setTimeout(() => {
      Battle.classList.add('result')
    }, 1000);

  }, 1500);
  
}

function ChangeScore() {
  setTimeout(() => {
    Score.classList.add('changing')
    localStorage.setItem('score', parseInt(localStorage.getItem('score')) + parseInt(1))
    setTimeout(() => {
      Score.classList.remove('changing')
      InitScore()
    }, 500)
  }, 2000);
}

function ChangeResult(result) {
  if( result === "lose" ) {
    ResultText.innerHTML = "You lose"
  } else if( result === "win" ) {
    ResultText.innerHTML = "You win"
  } else {
    ResultText.innerHTML = "Draw"
  }
}

function InitScore() {
  Score.innerHTML = localStorage.getItem('score')
}

function OpenModal(modal) {
  const currentModal = document.querySelector('.' + modal + '-modal')
  currentModal.style.display = "flex"
}
function CloseModal() {
  const Modals = document.querySelectorAll('.modal')
  for (const modal of Modals) {
    modal.style.display = "none"
    
  }
}
function resetScore() {
  localStorage.setItem('score', 0)
  InitScore()
}

InitScore()