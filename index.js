const express = require ('express')
//const bodyParser = require('body-parser') // importando body-parser
const app = express() // iniciando o express

app.listen ('3000')

app.route('/').get( (req,res) => res.send('Hello'))
//app.route('/Sobre').get((req, res) => res.send('Hello sobre'))

//app.get('/', (req, res) => res.send('Minha API'));

//Middleware
app.use (express.json())

// usando o parser para pegar a informação do POST
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())

//variaveis
let author = "Arcelinda"
// Rotas

//app.route('/').post ( (req,res) => console.log(req.body))
app.route('/').post ( (req,res) => res.send(req.body))

app.route('/').put ((req,res) => {
    author = req.body.author
    res.send(author)

})

app.route('/').get ((req,res) => res.send(author))

app.route('/:identificador').delete ((req,res) => {
    res.send(req.params.identificador)
})