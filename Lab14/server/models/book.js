const fs = require('fs');
const path = require('path');

let bookList = {};
const BOOK_JSON_PATH = path.join(__dirname, '..', 'data', 'book.json');

module.exports = class Book {
    constructor(title, ISBN, publishedDate, author) {
        this.bookId = null;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {

    }

    update() {

    }

    static getById(id) {

    }

    static getAll() {
        if (bookList.books)
            return bookList.books;
        bookList = this.fetchBookList();
        return bookList.books;
    }

    static fetchBookList() {
        if (fs.existsSync(BOOK_JSON_PATH))
            return JSON.parse(fs.readFileSync(BOOK_JSON_PATH));
        return { idCount: 1, books: [] };
    }

    static saveBookList() {
        JSON.parse(fs.writeFileSync(BOOK_JSON_PATH, bookList));
    }
}