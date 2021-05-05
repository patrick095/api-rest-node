const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv').config();

const PORT = process.env.PORT;

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//models
requireDir('./models/');

//Rotas
app.use('/', require('./routes'));

//socket io 
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { 
        origin: "*" , 
        methods: [ "GET" , "POST" ]
       } 
})
server.listen(PORT, ()=>{
    console.log("server listening at port "+PORT)
});
require('./controllers/chatController').io(io)