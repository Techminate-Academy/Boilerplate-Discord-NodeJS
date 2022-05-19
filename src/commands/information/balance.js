const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed, MessageAttachment
} = require('discord.js');

const Balance = require('../../schemas/balance')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Returns info based on user\'s balance')
        .addSubcommand(subcommand =>
            subcommand
            .setName('user')
            .setDescription('Info about a user')
            .addUserOption(option => option.setName("target").setDescription('The mentioned user'))),

    async execute(interaction, client) {
        let user = (interaction.options.getUser('target') ? interaction.options.getUser('target') : interaction.user);
        const balanceProfile = await client.createBalance(interaction.member);
        await interaction.reply({content : `${interaction.user.tag} has $${balanceProfile.amount}`})
    },
};