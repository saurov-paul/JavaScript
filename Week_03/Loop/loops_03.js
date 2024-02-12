// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

let distance, time;

while (distance != 0) {
  distance = Number(prompt("please give your Distance"));

  if (distance == 0) {
    console.log("distance 0 - game is over");
    break;
  }
}

time = Number(prompt("please give your time"));
let avarage = distance / time;
console.log(`avarage is ${avarage}`);
