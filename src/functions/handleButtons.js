const fs = require('node:fs');

const clientId = '972621733783797770';
const guildId = '966475714855579708';

module.exports = (client) => {
    client.handleButtons = async () => {
        const buttonFolder =fs.readdirSync('src/buttons');
        for (const folder of buttonFolders) {
            const buttonFiles = fs.readdirSync(`./src/buttons/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of buttonFiles) {
                const button = require(`../butons/${folder}/${file}`);
                // Set a new item in the Collection
                // With the key as the command name and the value as the exported module
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }
    }
}