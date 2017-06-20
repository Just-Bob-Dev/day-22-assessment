// requires and environment setup ...
const express = require('express');

const data = require('./data.js');
const mustacheExpress = require('mustache-express');

const app = express();
console.log(data.users[0].job);

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
  res.render('index', { img: data.users[0].avatar })
})


app.listen(3000, function(req, res){
  console.log("Hopefully this will work.");
})
