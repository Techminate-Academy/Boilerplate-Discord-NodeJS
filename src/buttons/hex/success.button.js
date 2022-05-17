module.exports = {
    data:{
        name: 'success-button'
    },
    async execute(interaction, client){
        await interaction.reply({content :'Color Success : #57F287'})
    }
}