const fs = require('fs');
const path = require('path');

let authorList = {};

const AUTHOR_JSON_PATH = path.join(__dirname, '..', 'data', 'author.json');

module.exports = class Author {
    constructor(firstName, lastName) {
        this.authorId = null;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getAuthorById(id) {
        if(!authorList.authors)
            authorList = this.fetchAuthorList();
        return authorList.authors.find(a => a.authorId == id);
    }

    save() {
        if (!authorList.authors) {
            authorList = this.fetchAuthorList();
        }
        this.authorId = authorList.authorIdCount++;
        authorList.authors.push(this);
        Author.saveAuthorList();
        return this;
    }

    static fetchAuthorList() {
        if (fs.existsSync(AUTHOR_JSON_PATH))
            return JSON.parse(fs.readFileSync(AUTHOR_JSON_PATH));
        return { authorIdCount: 1, authors: [] };
    }

    static saveAuthorList() {
        JSON.parse(fs.writeFileSync(AUTHOR_JSON_PATH, JSON.stringify(this.authorList)));
    }
}