const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
            .setName('user')
            .setDescription('Info about a user')
            .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
            .setName('server')
            .setDescription('Info about the server')),

    async execute(interaction) {
        if (interaction.options.getSubCommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information: `)
                    .setDescription('This is a description')
                    .setURL('http://sazidahmed.com')
            await interaction.reply(`Username : ${user.username}\n ID: ${user.id}`);
        } else {
            await interaction.reply(`Username : ${interaction.user.username}\n Your ID: ${interaction.user.id}`);
        }
    } else if (interaction.options.getSubCommand() === 'server') {
        await interaction.reply(`server name : ${interaction.guild.name}\n Total Members : ${interaction.guild.membercount}`)
    } else {
        await interaction.reply('no sub command was used.')
    }
},
};