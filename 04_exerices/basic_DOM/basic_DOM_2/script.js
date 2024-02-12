/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

let myButton = document.getElementById("addFruitBtn");

function myFunction() {
  let fruitInput = document.getElementById("fruitInput");
  let fruitvalu = fruitInput.value;

  let createli = document.createElement("li");

  createli.textContent = fruitvalu;

  document.getElementById("fruitList").appendChild(createli);

  fruitInput.value = "";
}

myButton.addEventListener("click", myFunction);


// Margit solution

// const addDetails = () => {
//   const furitInput = document.querySelector("#furitInput").value.trim();
//   const furitList = document.querySelector("#furitList");
//   if (furiteList){
//     const newLi =document.createElement("li");
//     newLi.textContent=furitInput;
//     furitInput.appendChild(newLi);
//     furitInput="";
//   }else ("please input valu")
// };
// myButton.addEventListener("click", addDetails);
