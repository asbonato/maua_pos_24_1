const http = require('http')
const express = require('express')

const app = express()
const porta = 3000
app.set('port', porta)

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


const server = http.createServer(app)
server.listen(3000)
