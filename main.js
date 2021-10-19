const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBut = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBut.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const ComputerOptions = ["rock", "paper", "scissors"];
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = ComputerOptions[computerNumber];

        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        setTimeout(() => {
          playerHand.src = `./${this.textContent}.png`;
          computerHand.src = `./${computerChoice}.png`;
          compareHands(this.textContent, computerChoice);
          playerScore.textContent = pScore;
          computerScore.textContent = cScore;
        }, 1500);
        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore += 1;
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore += 1;
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore += 1;
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore += 1;
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore += 1;
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore += 1;
        return;
      }
    }
  };
  startGame();
  playMatch();
};
game();
