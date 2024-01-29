// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

// promt, switch, rendom
function clickButton() {
  let x = prompt("Ask your Question here ?");
  let userInput = Math.floor(Math.random() * 10 + 1);

  switch (userInput) {
    case 1:
      document.write("Sure thing, like finding socks in a laundry basket");
      break;
    case 2:
      document.write("You betcha, like butter on toast!");
      break;
    case 3:
      document.write("Affirmative, as certain as coffee needing a Monday.");
      break;
    case 4:
      document.write("Totally, like pizza at a party!");
      break;
    case 5:
      document.write("Oh, for sure, like emojis in a text message.");
      break;
    case 6:
      document.write("Without a doubt, like cats plotting world domination");
      break;
    case 7:
      document.write("Yep, like a selfie in good lighting!");
      break;
    case 8:
      document.write("Definitely, like Wi-Fi in a coffee shop.");
      break;
    case 9:
      document.write("Oh, absolutely, like tacos on a Tuesday!");
      break;
    case 10:
      document.write("Indeed, like laughter at a funny joke!");
      break;
    default:
      document.write("Stop & GO to sleep");
  }
}
