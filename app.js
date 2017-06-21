// requires and environment setup ...
const express = require('express');
const css = require('./public/main.css')
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

const app = express();
console.log(data.users[0].job);


app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/', function (req, res) {
    res.render('index', {users: data.users});
    // module =
    // `
    // <div class="robot">
    //   <img src=${data.users[i].avatar} alt="image of robot">
    //   <h1>${data.users[i].name}</h1>
    //   <h2>${data.users[i].job}</h2>
    // </div>
    // `
    // document.getElementById("robot-container").innerHTML += module;

});
app.get('/')




app.listen(3000, function(req, res){
  console.log("Hopefully this will work.");
})
