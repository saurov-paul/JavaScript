/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here

// let library = [
//   {
//     title: "The great wall",
//     author: "Grat Nobe",
//     yearPublisher: "2023",
//   },
//   {
//     title: "Sence Of Human",
//     author: "Miki Mouse",
//     yearPublisher: "2024",
//   },
// ];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

// let book1title = library[0].title;

// console.log(book1title);

// let newYear = library[1].yearPublisher = 2025;
// let updateBook = library[1];

// console.log(updateBook);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
// let library = [
//   {
//     title: "The great wall",
//     author: "Grat Nobe",
//     yearPublisher: "2023",
//   },
//   {
//     title: "Sence Of Human",
//     author: "Miki Mouse",
//     yearPublisher: "2024",
//   },
// ];

// library[0].genres = ["Adventure", "Fantasy"];
// library[0]["isAvailable"] = true;
// console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

// let library = [
//   {
//     title: "The great wall",
//     author: "Grat Nobe",
//     yearPublisher: "2023",
//   },
//   {
//     title: "Sence Of Human",
//     author: "Miki Mouse",
//     yearPublisher: "2024",
//   },
// ];

// function Book(title, author, yearPublished, genres){
//   this.title = title;
//   this.author = author;
//   this.yearPublished = yearPublished;
//   this.genres = genres;
// }

// let newBook = new Book ("Lord of the Ring", "John Ronald Reuel Tolkien", "1995", "High Fantasy")

// library.push(newBook);

// console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

class createBook {
  constructor(title, author, yearPublished, genres) {
    [
      (this.title = title),
      (this.author = author),
      (this.yearPublished = yearPublished),
      (this.genres = genres),
    ];
  }
}

let newBook = new createBook(prompt("title"), prompt("author"), prompt("yearPubslisher"), prompt("genres"));
console.log(newBook);

// ("harry potter", "J. K. Rowling", "1997", "fantasy, drama and coming-of-age fiction")

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
