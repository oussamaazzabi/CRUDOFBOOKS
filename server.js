require('./models/db')
const express = require('express')
const dotenv = require('dotenv').config()
const livreController = require ('./controllers/livreController')
const path = require ('path')
const exphbs=require('express-handlebars')
const bodyparser = require('body-parser')
const { extname } = require('path')
const port = 3000

const app = express()

app.use(bodyparser.urlencoded({
  extended: true
}),

app.use(bodyparser.json()))

app.set('views',path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/views/layouts/')));

app.set('view engine','hbs')

app.listen(port, () => console.log('server started on port ${port}'));

app.use('/livre', livreController)