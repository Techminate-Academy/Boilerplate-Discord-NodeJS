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
        if (interaction.options.getSubcommand() === 'user') {
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
                        { name: 'username', value: `Username is : ${user.username}`, inline:true },
                        { name: '\u200B', value: '\u200B', inline:true },
                        { name: 'Tag', value: `Tag is : #${user.discriminator}`, inline: true }
                    )
                    .addField('Inline field title', 'Some value here', true)
                    .setImage('attachment://logo.png')
                    .setTimestamp()
                    .setFooter(client.user.tag, client.user.displayAvatarURL());
            await interaction.reply(`Username : ${user.username}\n ID: ${user.id}`);
        } else {
            await interaction.reply(`Username : ${interaction.user.username}\n Your ID: ${interaction.user.id}`);
        }
    } else if (interaction.options.getSubcommand() === 'server') {
        await interaction.reply(`server name : ${interaction.guild.name}\n Total Members : ${interaction.guild.memberCount}`)
    } else {
        await interaction.reply('no sub command was used.')
    }
},
};