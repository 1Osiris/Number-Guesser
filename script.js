let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = function () {Math.floor(Math.random() * 10)}

let compareGuesses =  function (humanG, compG, targetNum) {
if (Math.abs(humanG - targetNum) > Math.abs(compG - targetNum)) {return true} else {return false} }

let updateScore = function (winner) {if 
(winner === "human") {++humanScore} else if (winner === "computer") {++computerScore}}

let advanceRound = function () 
{++currentRoundNumber}
