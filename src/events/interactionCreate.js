module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true
                });
            }
        } else if (interaction.isSelectMenu()) {
            if(interaction.customId == 'select-color'){
                let colors = "";
                await interaction.values.forEach(async value => {
                    colors += `${value}`                   
                });
                await interaction.reply({content: `your favorite colors are : ${colors}`})
            }
        }


    },
};