const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello from future!')
})

app.listen(3000)