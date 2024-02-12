/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

function myFunction() {
  let selectID = document.getElementById("content");
  selectID.textContent = "Hello, World";
}
document.addEventListener("click", myFunction);
