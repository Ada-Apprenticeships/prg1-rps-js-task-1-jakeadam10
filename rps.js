function rockPaperScissors(player1, player2) {
  const winningMove = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["lizard", "paper"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return player1 === player2
    ? "draw"
    : winningMove[player1].includes(player2)
    ? "player1"
    : "player2";
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
