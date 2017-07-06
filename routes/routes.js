const express = require('express');
const bodyParser = require('body-parser');
const comicBook = require('../models/schema');

const router = express.Router();


router.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res){
  comicBook.find().then(function(books){
    res.render('index', {books: books});
  });
});

router.post('/delete', function(req, res){
  comicBook.deleteOne({_id: req.body.id}, function(){
    res.redirect('/');
  });
});

router.post('/update', function(req, res){
  comicBook.updateOne({
    _id: req.body.id
  }, {
    $set: {
      name: req.body.newName
    }
  }).then(function(){
    res.redirect('/');
  });
});

router.post('/newcomic', function(req, res){
  var entry = new comicBook({
    name: req.body.name,
    universe: req.body.universe,
    writer: req.body.writer,
    artist: req.body.artist
  });
  entry.issue.push({
    volume: req.body.volume,
    edition: req.body.edition
  });
  entry.save().then(function(){
    res.redirect('/');
  });
});



module.exports = router;
