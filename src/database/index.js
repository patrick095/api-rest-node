require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URL;
//iniciando o db
mongoose.connect(mongoURL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    });
mongoose.set('useCreateIndex', true);
console.log('successfully connected to database');
module.exports = mongoose;