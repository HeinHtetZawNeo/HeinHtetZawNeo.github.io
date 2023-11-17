let bookList = [];
let bookIDcounter = 0;
module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAllBooks(){
        return bookList;
    }

    static getBookById(id){
        let book = bookList.find(b=>b.id==id);
        if(book)
            return book;
        else
            return new Error("Invalid Book ID");
    }

    updateBookById(){
        let index = bookList.findIndex(b=>b.id==this.id);
        if(index>-1){
            bookList[index] = this;
            return this;
        }else{
            return new Error("Invalid Book ID");
        }
    }  

    createBook(){
        this.id = bookIDcounter++;
        bookList.push(this);
        return this;
    }

    static deleteBookById(id){
        if(bookList.filter(b=>b.id==id).length==0)
            return new Error("Invalid Book ID");
        else
            bookList = bookList.filter(b=>b.id!=id);
    }
}