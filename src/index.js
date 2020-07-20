const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

//iniciando o App
const app = express()
app.use(express.json())
app.use(cors())
//iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
    )

//models
requireDir('./models/')

//Rotas
app.use('/api', require('./routes'))




console.log("server rodando na porta 3001!")
app.listen(3001)