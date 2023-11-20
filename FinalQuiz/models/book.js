let bookdIDCounter = 3;

let bookList = [
    {
        bookId: 1,
        title: "Node.js",
        author: {
            authorId: 303,
            firstname: "Edward",
            lastname: "Jack"
        }
    },
    {
        bookId: 2,
        title: "Angular",
        author: {
            authorId: 308,
            firstname: "John",
            lastname: "Smith"
        }
    }
];

module.exports = class Book {
    constructor(title, author) {
        this.bookId=null;
        this.title = title;
        this.author = author;
    }

    static getBookById(id){
        console.log(id);
        return bookList.filter(book=>book.bookId==id);
    }

    createNewBook(){
        this.bookId = bookdIDCounter++;
        bookList.push(this);
        return this;
    }

    static getBookByAuthorFirstName(fname){
        return bookList.filter(book=>book.author.firstname.toLowerCase().includes(fname.toLowerCase()));
    }
}