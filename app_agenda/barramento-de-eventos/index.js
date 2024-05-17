const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body
    //envio para o microsserviço de lembretes
    axios.post('http://localhost:4000/eventos', evento)
    //envio para o microsservico de observacoes
    axios.post('http://localhost:5000/eventos', evento)
    //envio para o microsservico de consultas
    axios.post('http://localhost:6000/eventos', evento)
    res.status(200).send({msg: 'ok'})
})

app.listen(10000, () => {
    console.log("Barramento de eventos. Porta 10000")
})