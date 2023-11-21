const Book = require('../models/book');
const Author = require('../models/author');
exports.getAllBooks = (req,res)=>{
    res.json(Book.getAll());
}

exports.createBooks =(req,res)=>{
    let {title,ISBN,publishedDate,author} = req.body
    tempAuthor = Author.getAuthorById(author.authorId);
    if(!tempAuthor){
        const {firstName,lastName} = author;
        tempAuthor = new Author(firstName,lastName).save();
    }
    res.json(new Book(title,ISBN,publishedDate,tempAuthor).save());
}