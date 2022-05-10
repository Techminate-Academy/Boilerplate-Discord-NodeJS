const mongoose = require('mongoose')
const fs = require('fs')
const mongoEventFiles = fs.readdirSync('./src/events/database').filter(file => file.endsWith('.js'));

module.exports = (client) =>{
    client.dbConnection = async() => {
        for (const file of mongoEventFiles) {
            const event = require(`../events/database/${file}`);
            if (event.once) {
                mongoose.connection.once(event.name, (...args) => event.execute(...args));
            } else {
                mongoose.connection.on(event.name, (...args) => event.execute(...args));
            }
        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.dbToken, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        });
    }
}
