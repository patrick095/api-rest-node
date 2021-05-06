const mongoose = require('mongoose');
const Chat = mongoose.model('Chat');

module.exports = {
    async io(io){
        io.on('connection', async socket =>{
            console.log(socket.id);
            const dbMsgs = await Chat.findOne();
            //ao entrar vai receber todas as mensagens que já estão salvas
            socket.emit('wellcome', dbMsgs);

            socket.on('update', ()=>{
                socket.emit('wellcome', dbMsgs);
            })

            socket.on('sendMsg',async msg =>{
                const olderMsgs = await Chat.findOne();
                let filter = olderMsgs._id
                if (msg.msg === 'delAllMsg') {
                    olderMsgs.msgs = []
                    const newMsgs = await Chat.findByIdAndUpdate(filter, olderMsgs)
                    return io.emit('wellcome', [olderMsgs])
                }
                if (!msg.author) {
                    return socket.emit('alert',"Por favor, insira seu nome")
                }
                olderMsgs.msgs.push(msg);
                const newMsgs = await Chat.findByIdAndUpdate(filter, olderMsgs)
                io.emit('wellcome', [olderMsgs])
                //alertAll([olderMsgs])
            })
            function alertAll(msg){
                socket.emit('alert', msg)
            }
        })
    }
}