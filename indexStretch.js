/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

const computerMessage = document.querySelector(".computerWeapon");
const playerMessage = document.querySelector(".playerWeapon");
const resultMessage = document.querySelector(".result");
const button = document.querySelector("button");


const rockPaperScissors_STRETCH = () => {
  const aElements = document.querySelectorAll("a");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener("click", playGame);
  }
  button.addEventListener("click", cleanup);
};

const playGame = (e) => {
  const target = e.target;
  target.setAttribute("class", "clickedButton");
  // button.setAttribute("class", ".unhide");
  const userChoiceText = target.id;
  // alert(typeof target);
  // alert(typeof userInput);
  // alert(userInput);
  const userInput = userInputToNumber(userChoiceText);
  // alert(userInput);

  const computerInput = Math.floor(Math.random() * 3);
  // alert(computerInput);
  const computerChoiceText = getComputerChoiceText(computerInput);
  // alert(computerChoiceText);
  // alert(computerInput);

  const result = getResults(userInput, computerInput);
  // alert(result);

  sendMessages(computerChoiceText, userChoiceText, result);
};

const userInputToNumber = (userInput) => {
  switch (userInput) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      alert("something went wrong!");
      return;
  }
  // alert(userInput);
};

const getComputerChoiceText = (computerInput) => {
  switch (computerInput) {
    case 0:
      computerChoiceText = "rock";
      break;
    case 1:
      computerChoiceText = "paper";
      break;
    case 2:
      computerChoiceText = "scissors";
      break;
  }
  // alert(computerChoiceText);
  return computerChoiceText;
};

const getResults = (userInput, computerInput) => {
  if (userInput === computerInput) {
    return "Draw";
  } else if (userInput === 0 && Math.abs(userInput - computerInput) === 2) {
    return "User";
  } else if (userInput > computerInput && userInput - computerInput === 1) {
    return "User";
  } else {
    return "Computer";
  } 
};

const sendMessages = (computerChoice, playerChoice, result) => {
  computerMessage.innerHTML = `Computer chose: ${computerChoice}`;
  playerMessage.innerHTML = `Player chose: ${playerChoice}`;
  resultMessage.innerHTML = `The winner is... ${result}!!!`;
};

const cleanup = () => {
  const elementToReset = document.querySelector(".clickedButton");
  elementToReset.removeAttribute("class", ".clickedButton");
  // button.removeAttribute("class", ".unhide");
}

rockPaperScissors_STRETCH();
