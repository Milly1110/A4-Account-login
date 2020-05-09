// include packages and define server related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account_login')
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// setting routes
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  console.log(req.body.email, req.body.password)
  login = accountLogin(req.body.email, req.body.password)
  if (login === 'Password error' || login === 'You are not allow to enter.') {
    res.render('index', { login: login })
  }
  else {
    res.render('login', { login: login })
  }
})


// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})