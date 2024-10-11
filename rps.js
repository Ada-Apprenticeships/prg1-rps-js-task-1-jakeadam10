function rockPaperScissors(player1, player2) {
  const winningMoves = { 
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"] };

  if (player1 === player2) return "draw";
  return winningMoves[player1].includes(player2) ? "player1" : "player2";
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};