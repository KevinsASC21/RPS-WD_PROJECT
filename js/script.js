
let userRPS;
let userTagRPS;
let computerRPS;
  
let userNumOfRock = 5;
let userNumOfPaper = 5;
let userNumOfScissors = 5;

let compNumOfRock = 5;
let compNumOfPaper = 5;
let compNumOfScissors = 5;

let rounds = 0;
let tieCounter = 0;


// let userRock = document.getElementById("uRock");
// let userPaper = document.getElementById("uPap");
// let userScisssors = document.getElementById("uSci");


$("#play").click(function() {

let computerTagRPS;
  
let winCondition;
let winConditionTag;

let RPSgenerator = 0;
  
let result;

userRPS = $(".input").val();
userTagRPS = "<p>" + userRPS + "</p>";
// let userPlay = document.getElementById("userChoice");
// console.log("THIS IS A TEST: " + userPlay);

// let pTag = document.createElement("p");
  
// userPlay.append(userRPS, pTag);

$(".userChoice").append(userTagRPS);

// let userRock = document.getElementById("uRock");
// let userPaper = document.getElementById("uPap");
// let userScisssors = document.getElementById("uSci");

computerRPS = getComputerChoice();

result = gameLogic(computerRPS,userRPS);

resultLogic(result);

  
// pls ignore all of this (everything below here and to the end of this click function)
// is old code
  
// RPSgenerator = Math.round(Math.random() * 2);
// console.log(RPSgenerator)
  
// if (RPSgenerator == 0) {
// computerRPS = "rock";
// } 
// else if (RPSgenerator == 1) {
// computerRPS = "paper";
// }
// else if (RPSgenerator == 2) {
// computerRPS = "scissors"
// }

// computerTagRPS = "<p>" + computerRPS + "</p>";
// $(".computerChoice").append(computerTagRPS);
  
// if (userNumOfRock == 0 && userNumOfPaper == 0 && userNumOfScissors == 0) {

// }

// else if (compNumOfRock == 0 && compNumOfPaper == 0 && compNumOfScissors == 0) {
  
// }

// else if (userNumOfRock == && userRPS.toLowerCase()  == "paper") {
  
// }
  
// else if (userNumOfRock == && userRPS.toLowerCase()  == "paper") {

// }
  
// else if (userNumOfRock == && userRPS.toLowerCase()  == "paper") {

// }

// else if (computerRPS === userRPS.toLowerCase()) {
// winCondition = "🏳️ Tie!";
// $(".printedResult").append("<p style=\"color:grey;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "rock" && userRPS.toLowerCase()  == "scissors") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// userNumOfScissors -= 1;
// display();
// }
  
// else if (computerRPS == "rock" && userRPS.toLowerCase()  == "paper") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "paper") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "rock") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// compNumOfRock -= 
// }
  
// else if (computerRPS == "paper" && userRPS.toLowerCase()  == "rock") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// userNumOFRock -= 1;
// }
  
// else if (computerRPS == "paper" && userRPS.toLowerCase()  == "scissors") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// compNumOfPaper -= 1;
// }

// else if (userRPS == "") {
// winCondition = "🚫 Please enter a value!";
// $(".userChoice").append("...");
// $(".printedResult").append("<p style=\"color:red;\">" + winCondition + "</p>");
// }
  
// else {
// $(".printedResult").append("<p>" + "🚫 Invaild Input. Try Again." + "</p>");
// }
});

$("#resetB").click(function() {
location.reload();
});


// functions here


function display() {
$(".uRock").html(userNumOfRock + "x");
$(".uSci").html(userNumOfScissors + "x");
$(".uPap").html(userNumOfPaper + "x");
$(".cRock").html(compNumOfRock + "x");
$(".cSci").html(compNumOfScissors + "x");
$(".cPap").html(compNumOfPaper + "x");
$(".rCount").html("ROUND " + rounds);
$(".rCount").css("border","5px solid white");
$(".rCount").css("width","50%");
$(".rCount").css("margin","auto");
$(".rCount").css("margin-top","10px");
$(".rCount").css("padding","5px");
$(".rCount").css("color","white");
// $(".rCount").css("display","flex");
$(".rCount").css("text-align","center");
// console.log("THIS IS THE ROCK TEST " + (".uRock").text("LOL"));
}
                   
function getComputerChoice() {
let didntChoose = true;
let computerRPS;
  
while (didntChoose) {
  
let RPSgenerator = Math.round(Math.random() * 2);
console.log(RPSgenerator);
  
if (RPSgenerator == 0 && compNumOfRock > 1) {
computerRPS = "rock";
didntChoose = false;
} 
if (RPSgenerator == 1 && compNumOfPaper > 1) {
computerRPS = "paper";
didntChoose = false;
}
if (RPSgenerator == 2 && compNumOfScissors > 1) {
computerRPS = "scissors";
didntChoose = false;
}

}
  
let computerTagRPS;
computerTagRPS = "<p>" + computerRPS + "</p>";
$(".computerChoice").append(computerTagRPS);

return computerRPS;
}
  
  
function gameLogic(computer,user) {
let userInput = user;
let userRPS = user.toLowerCase();
let computerRPS = computer;
let gameResult;
  
// if (userRPS == "rock" && userNumOfRock == 0) {
// gameResult = "invaild";
// }
// if (userRPS == "paper" && userNumOfPaper == 0) {
// gameResult = "invaild";
// }
// if (userRPS == "scissors" && userNumOfScissors == 0) {
// gameResult = "invaild";
// }

// if (computerRPS === userRPS) {
// gameResult = "tie";
// }
  
// else if (computerRPS == "rock" && userRPS == "scissors" 
// || computerRPS == "scissors" && userRPS == "paper" 
// || computerRPS == "paper" && userRPS == "rock") {
// gameResult = "user";
// }

// else if (computerRPS == "rock" && userRPS == "paper"
// || computerRPS == "scissors" && userRPS == "rock"
// || computerRPS == "paper" && userRPS == "scissors") {
// gameResult = "computer";
// }

// else if (userInput == "" || userInput == null || userInput.length == 0) {
// gameResult = "empty";
// }
  
// else {
// gameResult = "invaild";
// }
  
  
if (userNumOfRock == 0 && userNumOfPaper == 0 && userNumOfScissors == 0) {
gameResult = "gameoverc"
}

else if (compNumOfRock == 0 && compNumOfPaper == 0 && compNumOfScissors == 0) {
gameResult = "gameoveru"
}
  

else if (userNumOfRock == 0 && userRPS.toLowerCase() == "rock") {
console.log("NO MORE CONDITION TEST");
gameResult = "ranout";
}
  
else if (userNumOfScissors == 0 && userRPS.toLowerCase() == "scissors") {
console.log("NO MORE CONDITION TEST");
gameResult = "ranout";
}
  
else if (userNumOfPaper == 0 && userRPS.toLowerCase() == "paper") {
console.log("NO MORE CONDITION TEST");
gameResult = "ranout";
}
  
else if (tieCounter == 3) {
gameResult = "break";
tieCounter = 0;
rounds++;
display();
}

else if (computerRPS == userRPS.toLowerCase()) {
gameResult = "tie";
tieCounter++;
rounds++;
display();
}
  
else if (computerRPS == "rock" && userRPS.toLowerCase()  == "scissors") {
gameResult = "computer";
userNumOfScissors -= 1;
compNumOfScissors += 1;
rounds++;
display();
}
  
else if (computerRPS == "rock" && userRPS.toLowerCase()  == "paper") {
gameResult = "user";
compNumOfRock -= 1;
userNumOfRock += 1;
rounds++;
display();
}
  
else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "paper") {
gameResult = "computer";
userNumOfPaper -= 1;
compNumOfPaper += 1;
rounds++;
display();
}
  
else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "rock") {
gameResult = "user";
compNumOfScissors -= 1;
userNumOfScissors += 1;
rounds++;
display();
}
  
else if (computerRPS == "paper" && userRPS.toLowerCase()  == "rock") {
gameResult = "computer";
userNumOfRock -= 1;
compNumOfRock += 1;
rounds++;
display();
}
  
else if (computerRPS == "paper" && userRPS.toLowerCase()  == "scissors") {
gameResult = "user";
compNumOfPaper -= 1;
userNumOfPaper += 1;
rounds++;
display();
}

else if (userRPS == "") {
gameResult = "emptyy";
}
  
else {
gameResult = "invaild";
}
  
console.log(userInput);
return gameResult;
}

  
function resultLogic (gameResult) {
let winCondition;
console.log(gameResult);
  
if (gameResult == "break") {
$(".printedResult").append("<p>" + "Weapons tied too much! Both players lose 1x weapon." + "</p>");
}

if (gameResult == "ranout") {
$(".printedResult").append("<p>" + "🚫 Weapon quantitity is 0! Choose something else!" + "</p>");
}
  
if (gameResult == "tie") {
winCondition = "🏳️ Tie! Weapons will default back to their owners.";
$(".printedResult").append("<p style=\"color:grey;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "computer") {
winCondition = "🖥️ Computer wins this round! (User will lose 1x weapon)";
$(".printedResult").append("<p style=\"color:blue;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "user") {
winCondition = "🏆 User wins this round! (Computer loses 1x weapon)";
$(".printedResult").append("<p style=\"color:orange;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "gameoveru") {
winCondition = "🎉 Congradulations for winning! Click RESET if you wish to play again!";
$(".printedResult").append("<p style=\"color:green;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "gameoverc") {
winCondition = "🙅 GAME OVER! The Computer bested you. Click RESET if you wish to play again!";
$(".printedResult").append("<p style=\"color:red;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "emptyy") {
winCondition = "🚫 Please enter a value!";
$(".userChoice").append("...");
$(".printedResult").append("<p style=\"color:red;\">" + "R"+rounds+": " + winCondition + "</p>");
}
  
if (gameResult == "invaild") {
$(".printedResult").append("<p" + "🚫 Invaild Input. Redo." + "</p>");
}

  
}

// find a way to make this more efficent

// RPS only really has four conditions: when the two items are the same, 
// a scenario where there's rock + paper, scissors + paper, and  rock + scissors
// (plus 21/ extra condition(s) for catching invalid/no input)