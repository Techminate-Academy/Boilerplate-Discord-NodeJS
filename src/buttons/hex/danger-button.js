module.exports = {
    data:{
        name: 'danger-button'
    },
    async execute(interaction, client){
        await interaction.reply({content :'Color Danger : #5865F2'})
    }
}