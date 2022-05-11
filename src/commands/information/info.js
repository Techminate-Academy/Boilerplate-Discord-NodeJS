const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Info based on demand!')
        .addSubcommand(subcommand=>
            subcommand
                .setName('user')
                .setDescription('Gets information of a user mentioned')
                .addUserOption(option => option.setName('target').setDescription('The user mentioned')))
        .addSubcommand(subcommand=>
            subcommand
                .setName('server')
                .setDescription('info about the server')),
                
	async execute(interaction) {
        if(interection.option.getSub() === 'user'){
            const user = interaction.option.getUser('target');
            if(user){
                await interaction.reply(`Username : ${user.username}\n ID: ${user.id}`);
            }else{
                await interaction.reply(`Username : ${interaction.user.username}\n Your ID: ${interaction.user.id}`);
            }
        }else if(interection.option.getSubcommand() === 'server'){
            await interaction.reply(`server name : ${interection.guild.name}\n Total Members : ${interaction.guild.memberCount}`)
        }else{
            await interection.reply('no sub command was used.')
        }
	},
};