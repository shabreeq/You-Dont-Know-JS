var inputString = process.argv;

var operator = inputString[2];
var a = inputString[3];
var b = inputString[4];


var outputNum;

if(operator === "add"){
  outputNum = parseFloat(a) + parseFloat(b);
}
if(operator === "subtract"){
  outputNum = parseFloat(a) - parseFloat(b);
}
if(operator === "multiply"){
  outputNum = parseFloat(a) * parseFloat(b);
}
if(operator === "divide"){
  outputNum = parseFloat(a) / parseFloat(b);
}



console.log(outputNum);