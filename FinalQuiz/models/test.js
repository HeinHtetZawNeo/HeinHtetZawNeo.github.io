const Book = require('./book');
const Author = require('./author');


let book = new Book(null, "Book1", new Author(null, "Mr.A", "B"));

console.log(book);