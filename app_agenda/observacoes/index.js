const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.status(200).send(observacoesPorLembreteId[req.params.id] || [])
})

// :id é um placeholder
// exemplo: /lembretes/123/observacoes
app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = 
        observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            id: idObs,
            texto,
            lembreteId: req.params.id
        }
    })
    res.status(201).send(observacoesDoLembrete)
})
app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.status(200).send({msg: 'Ok'})
})
app.listen(5000, () => {
    console.log('Observações. Porta 5000')
})