const mongoose = require('mongoose')
const fs = require('fs')
const mongoEventFiles = fs.readdirSync('./src/mongoEvents').filter(file => file.endsWith('.js'));

module.exports = (client) =>{
    client.dbLogin = async() => {
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.dbToken, {
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
    }
}
