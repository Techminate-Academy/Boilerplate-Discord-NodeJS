const {
	SlashCommandBuilder
} = require('@discordjs/builders');
const {
	MessageActionRow,
	MessageSelectMenu
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('color')
		.setDescription('Ask your favorite color'),

	async execute(interaction, client) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
				.setCustomId('selectColor')
				.setPlaceholder('Nothing selected')
				.setMinValues(1)
				.setMaxValues(2)
				.addOptions([{
						label: 'Green',
						description: 'Your favorite color is Green',
						value: 'Green',
					},
					{
						label: 'Red',
						description: 'Your favorite color is Red',
						value: 'Red',
					},
					{
						label: 'Blue',
						description: 'Your favorite color is Blue',
						value: 'Blue',
					},
				]),
			);

		await interaction.reply({
			content: 'What is your favorite color?',
			components: [row]
		});

	},
};