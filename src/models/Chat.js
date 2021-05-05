const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    msgs: { 
        type: Array
    }
});
mongoose.model('Chat', ChatSchema);