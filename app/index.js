// requires and environment setup ...

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index', { userName: 'Sam' })
})
