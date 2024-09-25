function rockPaperScissors(player1, player2) {
  const winningMove = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["lizard", "paper"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  if (player1 === player2) {
    return "draw";
  } else if (winningMove[player1].includes(player2)) {
    return "player1";
  }
  return "player2";
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
