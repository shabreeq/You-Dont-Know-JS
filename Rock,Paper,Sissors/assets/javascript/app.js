// Create guessing variables

var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

// Make function for pressing keys "r", "p", "s"

document.onkeyup = function(event){
  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

  console.log("User guess: " + userGuess);

  console.log("Computer guess: " + computerGuess);

  }

  for (var i = 0; i < ties.length; i++);{

  if(userGuess === computerGuess){
    ties++
    }   
  if(userGuess === "r" && computerGuess === "s"){
    wins++
    }
  if(userGuess === "r" && computerGuess === "p"){
    losses++
    }
  if(userGuess === "p" && computerGuess === "s"){
    losses++
    }
  if(userGuess === "p" && computerGuess === "r"){
    wins++
    }
  if(userGuess === "s" && computerGuess === "p"){
    wins++
    }
  if(userGuess === "s" && computerGuess === "r"){
    losses++
    }
  
  }

  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Ties: " + ties);



}

