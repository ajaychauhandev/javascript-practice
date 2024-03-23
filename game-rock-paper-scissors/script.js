/* winner flow
1- paper
2- rock
3- scissors
*/


let userScoreCount = 0;
let compScoreCount = 0;
let drawScoreCount = 0;
const choiceList = { rock, paper, scissors };
const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg');
const userSelected = document.querySelector('#user-selected');
const compSelected = document.querySelector('#comp-selected');
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#comp-score');
const drawScore = document.querySelector('#draw-score');


const drawGame = () => {
  drawScoreCount++;
  drawScore.innerText = drawScoreCount;

  msg.innerText = 'Game Draw, Play Again.';
  msg.style.backgroundColor = '#081b31';
}
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScoreCount++;
    userScore.innerText = userScoreCount;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = 'green';
  } else {
    compScoreCount++;
    compScore.innerText = compScoreCount;
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = 'red';
  }
}
// comp choice
const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  let randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
}

// play game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  userSelected.innerText = userChoice;
  compSelected.innerText = compChoice;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (userChoice === 'paper') {
      userWin = compChoice === 'rock' ? true : false;
    } else if (userChoice === 'rock') {
      userWin = compChoice === 'scissors' ? true : false;
    } else if (userChoice === 'scissors') {
      userWin = compChoice === 'paper' ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

// user choice
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});

// debug(Math.floor(Math.random() * 4))
// debug(choices)
function debug(data) {
  return document.write(JSON.stringify(data));
}
