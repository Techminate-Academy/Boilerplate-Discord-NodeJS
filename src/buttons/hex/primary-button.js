module.exports = {
    data:{
        name: 'primary-button'
    },
    async execute(interaction, client){
        await interaction.reply({content :'Color Primary : #ED4245'})
    }
}