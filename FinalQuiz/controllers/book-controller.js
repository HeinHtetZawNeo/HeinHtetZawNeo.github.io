const Book = require('../models/book');
const Author = require('../models/author');

exports.getAllBooks = (req,res)=>{
    res.json(Book.getBookById(req.params.id));
}

exports.createNewBook = (req,res)=>{
    const {title,author}=req.body;
    const {authorId,firstname,lastname} = author;
    res.json(new Book(title,new Author(authorId,firstname,lastname)).createNewBook());
}

exports.getBookByAurthorFirstName = (req,res)=>{
    res.json(Book.getBookByAuthorFirstName(req.query.firstname));
}