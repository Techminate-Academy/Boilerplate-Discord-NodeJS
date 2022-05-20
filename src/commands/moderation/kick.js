const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    Permissions
} = require('discord.js');

const Balance = require('../../schemas/balance')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick out an user from server'),
    permissions: [Permissions.FLAGS.KICK_MEMBERS],
    async execute(interaction, client) {
        await interaction.reply({content : `user is kicked`})
    },
};