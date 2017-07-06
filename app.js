const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Router = require('./routes/routes');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('/'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);


mongoose.connect('mongodb://localhost:27017/collection');


app.listen(8000, function(){
  console.log('Uploading Collection...');
});
// var comic = new Comics({
//   name: 'The Amazing Spider-Man',
//   universe: 'Marvel',
//   published: 'August 15, 1960',
//   writer: 'Stan Lee',
//   artist: 'Ross Andru'
// });
//
// comic.issue.push({volume: 1, edition: 1});
//
// Comics.create({
//   name: 'The Amazing Spider-Man',
//   universe: 'Marvel',
//   published: 'August 15, 1960',
//   writer: 'Stan Lee',
//   artist: 'Ross Andru'
// }).then().catch();



// { name: 'Pancakes',
//   _id: 59553335625ccdda459e09b4,
//   steps: [],
//   ingredients:
//    [ { ingredient: 'sugar',
//        measure: 'tbsp',
//        _id: 59553335625ccdda459e09b5,
//        amount: 1 } ] }
