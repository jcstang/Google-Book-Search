const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({    
    name: String,
    type: String
});

const Book = mongoose.model('ModelName', UserSchema);Book
module.exports = Book;