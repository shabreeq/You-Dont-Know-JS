var myFarm = ["pigs", "cows", "horses", "ostriches"];

for (var i = 0; i < myFarm.length; i++){
  if (myFarm[i].startsWith("c") || 
      myFarm[i].startsWith("o")) {
    console.log(myFarm[i] + " starts with 'c' or 'o'");
  }
  else{
    console.log(myFarm[i] + " does not start with 'c' or 'o'");
  }
}