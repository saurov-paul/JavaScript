// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.
let askBtn = document.querySelector(".askBtn");
// promt, switch, rendom
function magiceBall() {
  let x = prompt("Ask your Question here ?");
  let userInput = Math.floor(Math.random() * 10 + 1);

  let showRespone = document.querySelector(".response");
  let response;
  switch (userInput) {
    case 1:
      response = "Sure thing, like finding socks in a laundry basket";
      break;
    case 2:
      response = "You betcha, like butter on toast!";
      break;
    case 3:
      response = "Affirmative, as certain as coffee needing a Monday.";
      break;
    case 4:
      response = "Totally, like pizza at a party!";
      break;
    case 5:
      response = "Oh, for sure, like emojis in a text message.";
      break;
    case 6:
      response = "Without a doubt, like cats plotting world domination";
      break;
    case 7:
      response = "Yep, like a selfie in good lighting!";
      break;
    case 8:
      response = "Definitely, like Wi-Fi in a coffee shop.";
      break;
    case 9:
      response = "Oh, absolutely, like tacos on a Tuesday!";
      break;
    case 10:
      response = "Indeed, like laughter at a funny joke!";
      break;
    default:
      response = "Stop & GO to sleep";
  }

  showRespone.textContent = response;
}

askBtn.addEventListener("click", () => {
  magiceBall();
});
