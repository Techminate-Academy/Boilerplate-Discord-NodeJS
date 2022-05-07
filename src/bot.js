const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');


// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

(async ()=>{
    for (file of functions){
        require(`./functions/${file}`)(client);
    }
    client.login(process.env.token);
})();