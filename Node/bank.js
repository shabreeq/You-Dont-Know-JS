// Load the fs package to read and write
var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e "deposits", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-else would also work)
// The switch-case will driect which function gets run. 
switch (action) {
  case "total":
  total();
  break;

case "deposit":
  deposit();
  break;

case "withdraw":
  withdraw();
  break;

case "lotto":
  lotto();
  break; 
}

// If the "total" function is called...
function total(){

  // We will read the existing bank file
  fs.readFile("bank.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
  }

  // Break down all the numbers inside
  data = data.split(", ");
  var result = 0;

  // Loop through those numbers and add them together to get a sum.
  








}





