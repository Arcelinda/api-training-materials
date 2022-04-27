const express = require ('express')
const res = require('express/lib/response')

const app = express()

app.listen ('3000')
app.route('/').get( (req,res) => res.send('Hello'))
//app.route('/Sobre').get((req, res) => res.send('Hello sobre'))

//app.get('/', (req, res) => res.send('Minha API'));

//Middleware
app.use (express.json())

app.route('/').post ( (req,res) => console.log(req.boby))