const express = require("express")
const app = express()

app.get('/lembretes', (req, res) => {
    res.send('get lembretes')
})

app.post('/lembretes', (req, res) => {
    res.send('post lembretes')
})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})