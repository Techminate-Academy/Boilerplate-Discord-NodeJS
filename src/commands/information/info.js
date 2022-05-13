const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed, MessageAttachment
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
            .setName('user')
            .setDescription('Info about a user')
            .addUserOption(option => option.setName('target').setDescription('The mentioned user')))
        .addSubcommand(subcommand =>
            subcommand
            .setName('server')
            .setDescription('Info about the server')),

    async execute(interaction, client) {
        if (interaction.options.getSubCommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
                const userEmbed = new MessageEmbed()
                const file = new MessageAttachment('./src/images/logo.png')
                    .setTitle(`${user.username}'s Information: `)
                    .setDescription('This is a description')
                    .setURL('http://sazidahmed.com')
                    .EmbedAuthorData('Sazid Ahmed', client.user.displayAvatarURL(), 'http://sazidahmed.tk')
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: 'Regular field title', value: 'Some value here' },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                    )
                    .addField('Inline field title', 'Some value here', true)
                    .setImage('https://i.imgur.com/AfFp7pu.png')
                    .setTimestamp()
                    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
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