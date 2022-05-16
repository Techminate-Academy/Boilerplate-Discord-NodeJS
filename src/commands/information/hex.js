const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageActionRow,
    MessageButton
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hex')
        .setDescription('Displays hex color codes'),

    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('primary-button')
                .setLabel('Primary')
                .setStyle('PRIMARY'),

                new MessageButton()
                .setCustomId('success-button')
                .setLabel('Success')
                .setStyle('SUCCESS'),

                new MessageButton()
                .setCustomId('danger-button')
                .setLabel('Danger')
                .setStyle('DANGER'),
            );

        await interaction.reply({
            content: 'Click buttions to get colors',
            ephemeral: true,
            components: [row]
        });
    },
};