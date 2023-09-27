// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    volume: {
        type: String
    },
    number: {
        type: String
    },
    pages: {
        type: String
    },
    month: {
        type: String
    },
    note: {
        type: String
    },
    doi: {
        type: String
    },
    issn: {
        type: String
    },
    zblnumber: {
        type: String
    },
    eprint: {
        type: String
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);