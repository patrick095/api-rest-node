require('dotenv').config();
const mongoose = require('mongoose');
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    MONGODB_URL
  } = process.env;
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true
}
//url para desenvolver local
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

//iniciando o db
mongoose.connect(MONGODB_URL, options).then(()=>{
        console.log('successfully connected to database');
    }).catch(err =>{
        console.log(err)
    })
module.exports = mongoose;