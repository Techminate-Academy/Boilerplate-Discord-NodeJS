const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Info based on demand!')
        .addSubmitcommand(subcommand=>
        subcommand
            .setName('info')
            .setDescription('Info based on demand!')
            .addSubmitcommand(subcommand=>
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};