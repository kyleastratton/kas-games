const hidden = document.getElementById("hidden");
hidden.style.display = "none";

function selectChoice(option) {
  getUserChoice(`${option}`);
  const choice = document.querySelector(`#${option}`);
  displayUserChoice(choice.innerHTML);
}

function getUserChoice(id) {
  let userChoice = id;
  calculateWinner(userChoice);
}

function userIsRock(opponentChoice) {
  if (opponentChoice === "scissors") {
    renderResult("You win!");
  }
  if (opponentChoice === "paper") {
    renderResult("You lose!");
  } 
}

function userIsPaper(opponentChoice) {
  if (opponentChoice === "rock") {
    renderResult("You win!");
  } else {
    renderResult("You lose!");
  }
}

function userIsScissors(opponentChoice) {
  if (opponentChoice === "paper") {
    renderResult("You win!");
  } else {
    renderResult("You lose!");
  }
}

function calculateResult(userChoice, opponentChoice) {
  if (userChoice === opponentChoice) {
    return document.querySelector("#result").innerHTML = "It's a draw!"
  }
  if (userChoice === "rock") {
    userIsRock(opponentChoice)
  }
  if (userChoice === "paper") {
    userIsPaper(opponentChoice)
  }
  if (userChoice === "scissors") {
    userIsScissors(opponentChoice)
  }
}

function calculateWinner(userChoice) {
  // get opponent choice
  const validOptions = ["rock", "paper", "scissors"]
  let opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
  // let opponentChoiceValue = opponentChoice[0].toUpperCase() + opponentChoice.slice(1);
  // document.getElementById("opponent-selected").innerHTML = opponentChoiceValue;
  displayOpponentChoice(opponentChoice);

  // calculate winner
  calculateResult(userChoice, opponentChoice)
}

function displayUserChoice(icon) {
  document.querySelector("#displayUserChoice").innerHTML = icon;
};

function displayOpponentChoice(opponentChoice) {
  let target = document.querySelector(`#${opponentChoice}`);
  let newTarget = target.innerHTML;
  document.querySelector("#displayOpponentChoice").innerHTML = newTarget;
}

function renderResult(msg) {
  let span = document.getElementById("result"); 
  span.innerText = msg;
  hidden.style.display = "";

  if (msg === "You win!") {
    increaseYouScore();
  }

  if (msg === "You lose!") {
    increaseOponnentScore();
  }
}

function increaseYouScore() {
  let value = document.querySelector("#you").innerHTML;
  let numberValue = Number(value);
  let newValue = numberValue + 1;
  document.querySelector("#you").innerHTML = newValue;
}

function increaseOponnentScore() {
  let value = document.querySelector("#opponent").innerHTML;
  let numberValue = Number(value);
  let newValue = numberValue + 1;
  document.querySelector("#opponent").innerHTML = newValue;
}

function reset() {
  let resetValue = 0;
  document.querySelector("#you").innerHTML = resetValue;
  document.querySelector("#opponent").innerHTML = resetValue;
}
