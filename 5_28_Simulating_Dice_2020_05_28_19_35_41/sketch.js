/*
Grady Fort
Simulating Dice
Last edit 5_28
*/

// the program runs in the setup to use p5's library
function setup() {
  var iterations = 1000;
  var die1 = -1;
  var die2 = -1;
  var loopNum = 0; //use to count number of loops
  var snakeEyesCount = 0; //use to count 2's
  var percentage = -5
// simulate dice until iterations is reached
// (use ! instead of "until" loop)
  while(!(loopNum > iterations)){ 
    loopNum++;
    die1 = getRandomInt(1, 6);
    die2 = getRandomInt(1, 6);
    // count number of times the dice are a snake eye
    if (die1+die2 == 2) {
      snakeEyesCount++;
    }
  }
  
// print to console
  console.log ("Iterations: "+iterations);
  console.log ("Snake Eyes: "+snakeEyesCount);
  percentage = (snakeEyesCount/iterations)*100;
  console.log ("Percentage: "+percentage+"%");
  
// there is no function in p5's library for random integers
// I found this function in stackoverflow
// the floor and ceil functions are in p5
  function getRandomInt(min, max) {
      min = ceil(min);
      max = floor(max);
      return floor(random() * (max - min + 1)) + min;
  }
}
