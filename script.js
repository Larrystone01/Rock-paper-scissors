const selections = document.querySelectorAll(".game-btn");
const gameBody = document.querySelector(".game-body");
const rulesBtn = document.querySelector(".rules-btn");
const ruleModal = document.querySelector(".rules-modal");
const ruleModalClose = document.querySelector(".close-icon");
const choices = ["rock", "paper", "scissors"];
let score = 0;

function renderChoices() {
  const oldSelection = document.querySelector(".game-selection");
  if (oldSelection) oldSelection.remove();
  const gameBodyHTML = `
    <div class="game-selection">
      <div id="paper" class="game-btn">
        <a href="#"><img src="./images/icon-paper.svg" alt="Paper" /></a>
      </div>
      <div id="scissors" class="game-btn">
        <a href="#"><img src="./images/icon-scissors.svg" alt="Scissors" /></a>
      </div>
      <div id="rock" class="game-btn">
        <a href="#"><img src="./images/icon-rock.svg" alt="Rock" /></a>
      </div>
    </div>
  `;

  gameBody.insertAdjacentHTML("beforeend", gameBodyHTML);
  const gameSelection = document.querySelector(".game-selection");

  // gameSelection.classList.remove("no-bg");
  const selections = document.querySelectorAll(".game-btn");
  selections.forEach((selection) => {
    selection.addEventListener("click", () => {
      playGame(selection);
    });
  });
}

renderChoices();

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function getResultText(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function playGame(selection) {
  const playerChoice = selection.id;
  const computerChoice = getComputerChoice();

  const gameSelection = document.querySelector(".game-selection");

  gameSelection.style.background = "none";

  // gameSelection.classList.remove("no-bg");
  const playerHTML = `
    <div class="choice-block" id="player-block">
      <h5>You picked</h5>
      <div class="game-btn ${playerChoice}" id="${playerChoice}">
        <a href="#"><img src="./images/icon-${playerChoice}.svg" alt="${playerChoice}" /></a>
      </div>
    </div>
  `;

  const computerPlaceholderHTML = `
    <div class="choice-block" id="computer-block">
      <h5>the house picked</h5>
      <div class="game-btn placeholder"></div>
    </div>
  `;

  // Step 1: Render player and placeholder
  const gameContainer = document.querySelector(".game-selection");
  gameContainer.innerHTML = `
    <div class="results horizontal-layout">
      ${playerHTML}
      ${computerPlaceholderHTML}
    </div>
  `;

  // Step 2: After 1s, replace placeholder with computer choice
  setTimeout(() => {
    const newEl = document.createElement("div");
    newEl.className = `game-btn ${computerChoice}`;
    newEl.id = computerChoice;

    const img = document.createElement("img");
    img.src = `./images/icon-${computerChoice}.svg`;
    img.alt = computerChoice;

    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.appendChild(img);

    newEl.appendChild(anchor);

    const computerBlock = document.getElementById("computer-block");
    const placeholder = computerBlock.querySelector(".placeholder");
    computerBlock.replaceChild(newEl, placeholder);
  }, 3000);

  // Step 3: After 2s, show result text between choices
  setTimeout(() => {
    const resultText = getResultText(playerChoice, computerChoice);

    const resultHTML = `
      <div class="result-block">
        <div class="outcome">
          <h1>${resultText}</h1>
          <button class="play-again">play again</button>
        </div>
      </div>
    `;

    const computerBlock = document.getElementById("computer-block");
    computerBlock.insertAdjacentHTML("beforebegin", resultHTML);

    if (resultText === "You Win!") {
      document
        .getElementById("player-block")
        .querySelector(".game-btn")
        .classList.add("winner");
      score++;
    } else if (resultText === "You Lose!") {
      document
        .getElementById("computer-block")
        .querySelector(".game-btn")
        .classList.add("winner");
      const resultBlock = document.querySelector(".result-block");
      const lose = resultBlock.querySelector(".play-again");
      lose.style.color = "red";
      if (score && score > 0) {
        score--;
      }
    }
    const playAgainBtn = document.querySelector(".play-again");
    playAgainBtn.addEventListener("click", () => {
      renderChoices();
    });
    const scores = document.getElementById("score-count");
    scores.textContent = score;
  }, 4000);
}

rulesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!ruleModal.classList.contains("active")) {
    ruleModal.classList.add("active");
  }
});

ruleModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (ruleModal.classList.contains("active")) {
    ruleModal.classList.remove("active");
  }
});
