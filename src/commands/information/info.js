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
            .addUserOption(option => option.setName("target").setDescription('The mentioned user')))
        .addSubcommand(subcommand =>
            subcommand
            .setName('server')
            .setDescription('Info about the server')),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
                const file = new MessageAttachment('./src/images/logo.png')
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username} `)
                    .setDescription('Description')
                    .setURL('http://sazidahmed.com')
                    .setAuthor({ name: 'Sazid Ahmed', iconURL: client.user.displayAvatarURL(), url: 'https://discord.js.org' })
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: 'username', value: `Username is : ${user.username}`, inline:true },
                        { name: '\u200B', value: '\u200B', inline:true },
                        { name: 'Tag', value: `Tag is : #${user.discriminator}`, inline: true }
                    )
                    .addField('Inline field title', 'Some value here', true)
                    .setImage('attachment://logo.png')
                    .setTimestamp()
                    .setColor('RED')
                    .setFooter({ text: client.user.tag, iconURL: client.user.displayAvatarURL() });
                    
            // await interaction.reply(`Username : ${user.username}\n ID: ${user.id}`);
            await interaction.reply({embeds : [userEmbed], files: [file] });
        } else {
            await interaction.reply(`Username : ${interaction.user.username}\n Your ID: ${interaction.user.id}`);
        }
    } else if (interaction.options.getSubcommand() === 'server') {
        await interaction.reply(`Server name : ${interaction.guild.name}\n Total Members : ${interaction.guild.memberCount}`)
    } else {
        await interaction.reply('no sub command was used.')
    }
},
};