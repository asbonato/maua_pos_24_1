const http = require('http')
const express = require('express')

const app = express()
app.use(express.json())

const porta = 3000
app.set('port', porta)

let contador = 2
const clientes = [
    {
        id: 1,
        nome: 'João',
        email: 'joao@email.com'
    },
    {
        id: 2,
        nome: 'Cristina',
        email: 'cris@email.com'
    },
]

app.get('/teste', (req, res) => {
    res.send('Olá!')
})

app.get('/clientes', (req, res) => {
    res.send(clientes)
})

app.get('/clientes/:id', (req, res) => {
    const id_cliente = req.params.id
    const cliente = clientes.filter((cliente) => {
        return cliente.id == id_cliente
    })
    if (cliente.length > 0){
        res.status(200).json(cliente[0])
    } else {
        res.status(404).end()
    }
})

app.delete('/clientes/:id', (req, res) => {
    const id_cliente = req.params.id
    let cliente = {}
    let i = 0
    for (; i < clientes.length; i++){
        if (clientes[i].id == id_cliente){
            break
        }
    }
    if (i < clientes.length){
        cliente = clientes.splice(i, 1)
    }
    res.status(200).send(cliente)
})

app.post('/clientes', (req, res) => {
    const cliente = req.body
    clientes.push({id:contador+=1, nome:cliente.nome, email: cliente.email})
    console.log(clientes)
    res.status(201).json(clientes)
})

app.put('/clientes/:id', (req, res) => {
    const id_cliente = req.params.id
    const cliente = req.body
    let i = 0
    for (; i < clientes.length; i++){
        if (clientes[i].id == id_cliente){
            break
        }
    }
    if (i < clientes.length){
        clientes[i].nome = cliente.nome
        clientes[i].email = cliente.email
    }
    res.status(200).send(cliente)
})


const server = http.createServer(app)
server.listen(3000)
