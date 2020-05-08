const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({    
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model('ModelName', UserSchema);Book
module.exports = Book;