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

// function playGame(playerBtn) {
//   const playerChoice = playerBtn.id;
//   const computerChoice = getComputerChoice();

//   const playerHTML = `
//     <div class="game-btn ${playerChoice}" id="${playerChoice}">
//       <a href="#"><img src="./images/icon-${playerChoice}.svg" alt="${playerChoice}" /></a>
//     </div>
//   `;

//   const computerHTML = `
//     <div class="game-btn ${computerChoice}" id="${computerChoice}">
//       <a href="#"><img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}" /></a>
//     </div>
//   `;

//   const resultHTML = `
//     <div class="results in-result">
//       <div class="choice-block">
//         <h3>You picked:</h3>
//         ${playerHTML}
//       </div>

//       <div class="choice-block">
//         <h3>house picked:</h3>
//         ${computerHTML}
//       </div>
//     </div>
//   `;

//   gameBody.style.background = "none";
//   gameBody.innerHTML = resultHTML;
// }

// function playGame(playerBtn) {
//   const playerChoice = playerBtn.id;
//   const computerChoice = getComputerChoice();

//   const playerHTML = `
//     <div class="game-btn ${playerChoice}" id="${playerChoice}">
//       <a href="#"><img src="./images/icon-${playerChoice}.svg" alt="${playerChoice}" /></a>
//     </div>
//   `;

//   const gameContainer = document.querySelector(".game-selection");

//   // Step 1: Only show player's choice for now
//   const initialHTML = `
//     <div class="results in-result">
//       <div class="choice-block">
//         <h3>You chose:</h3>
//         ${playerHTML}
//       </div>
//     </div>
//   `;

//   gameContainer.innerHTML = initialHTML;

//   // Step 2: After delay, show computer's choice and result
//   setTimeout(() => {
//     const computerHTML = `
//       <div class="choice-block">
//         <h3>Computer chose:</h3>
//         <div class="game-btn ${computerChoice}" id="${computerChoice}">
//           <a href="#"><img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}" /></a>
//         </div>
//       </div>
//     `;

//     const resultText = getResultText(playerChoice, computerChoice);

//     const outcomeHTML = `
//       <div class="outcome">${resultText}</div>
//     `;

//     // Append computer's choice and result
//     gameContainer.querySelector(".results").innerHTML +=
//       computerHTML + outcomeHTML;
//   }, 1000); // 1 second delay
// }

// function playGame(playerBtn) {
//   const playerChoice = playerBtn.id;
//   const computerChoice = getComputerChoice();

//   const playerHTML = `
//     <div class="choice-block">
//       <h3>You chose:</h3>
//       <div class="game-btn ${playerChoice}" id="${playerChoice}">
//         <a href="#"><img src="./images/icon-${playerChoice}.svg" alt="${playerChoice}" /></a>
//       </div>
//     </div>
//   `;

//   const resultPlaceholderHTML = `
//     <div class="result-block">
//       <div class="outcome">...</div>
//     </div>
//   `;

//   const computerPlaceholderHTML = `
//     <div class="choice-block computer-block">
//       <h3>Computer chose:</h3>
//     </div>
//   `;

//   // Step 1: Layout with player's choice + placeholder for result and computer
//   const gameContainer = document.querySelector(".game-selection");
//   gameContainer.innerHTML = `
//     <div class="results in-result horizontal-layout">
//       ${playerHTML}
//       ${resultPlaceholderHTML}
//       ${computerPlaceholderHTML}
//     </div>
//   `;

//   // Step 2: After 1s, add computer's choice
//   setTimeout(() => {
//     const computerHTML = `
//       <div class="game-btn ${computerChoice}" id="${computerChoice}">
//         <a href="#"><img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}" /></a>
//       </div>
//     `;
//     document.querySelector(".computer-block").innerHTML += computerHTML;
//   }, 3000);

//   // Step 3: After 2s, show result text
//   setTimeout(() => {
//     const resultText = getResultText(playerChoice, computerChoice);
//     document.querySelector(".outcome").textContent = resultText;
//   }, 2000);
// }

// function playGame(playerBtn) {
//   const playerChoice = playerBtn.id;
//   const computerChoice = getComputerChoice();

//   const playerHTML = `
//     <div class="choice-block" id="player-block">
//       <h3>You chose:</h3>
//       <div class="game-btn ${playerChoice}" id="${playerChoice}">
//         <a href="#"><img src="./images/icon-${playerChoice}.svg" alt="${playerChoice}" /></a>
//       </div>
//     </div>
//   `;

//   const computerHTML = `
//     <div class="choice-block" id="computer-block">
//       <h3>Computer chose:</h3>
//       <div class="game-btn ${computerChoice}" id="${computerChoice}">
//         <a href="#"><img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}" /></a>
//       </div>
//     </div>
//   `;

//   // Step 1: Show only player's choice first
//   const gameContainer = document.querySelector(".game-selection");
//   gameContainer.innerHTML = `
//     <div class="results horizontal-layout">
//       ${playerHTML}
//       <div class="choice-block" id="computer-block">
//       <h3>Computer chose:</h3>
//     </div>
//   `;

//   const resultsContainer = gameContainer.querySelector(".results");

//   // Step 2: After 1s, insert computer choice
//   setTimeout(() => {
//     resultsContainer.insertAdjacentHTML("beforeend", computerHTML);
//   }, 1000);

//   // Step 3: After 2s, insert result text in the middle
//   setTimeout(() => {
//     const resultText = getResultText(playerChoice, computerChoice);
//     const resultHTML = `
//       <div class="result-block">
//         <div class="outcome">${resultText}</div>
//       </div>
//     `;

//     // Insert result text between player and computer blocks
//     const playerBlock = document.getElementById("player-block");
//     const computerBlock = document.getElementById("computer-block");

//     if (playerBlock && computerBlock) {
//       computerBlock.insertAdjacentHTML("beforebegin", resultHTML);
//     }
//   }, 2000);
// }

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
