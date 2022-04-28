const express = require('express')
const app = express() // iniciando o express
app.listen('3000')

app.route('/').get((req, res) => res.send('Hello'))
//app.route('/Sobre').get((req, res) => res.send('Hello sobre'))

//app.get('/', (req, res) => res.send('Minha API'));

//Middleware
app.use(express.json())

//variaveis
let author = "Arcelinda"
// Rotas
//app.route('/').post ( (req,res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)

})

app.route('/').get((req, res) => res.send(author))

//Delete
app.route('/:identificador').delete((req, res) => {
    let idToDelete = req.params.identificador
    let result = []
    for (index = 0; index < data.length; index++) {

        if (data[index].id === idToDelete) { // procurar o id do objecto que pretende eliminar
            console.log("Removido: ", data[index])
            result = data.splice(index, 1)           // remove o objecto da "base de dados" em memoria
        }
    }
    console.log(data)                       // verificar se objecto foi removido

    res.send(result)      // retorna a resposta da requisicao
})

let data = [
    {
        author: "Name",
        id: '1'
    },
    {
        author: "Author2",
        id: '2'
    }
]
