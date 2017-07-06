const mongoose = require('mongoose');

const comicBooks = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  universe: {type: String, required: true},
  writer: {type: String, required: true},
  artist: {type: String, required: true},
  issue: [{
    volume: {type: Number, required: true, unique: true},
    edition: Number,
  }]
});

const comics = mongoose.model('comics', comicBooks);

module.exports = comics;
