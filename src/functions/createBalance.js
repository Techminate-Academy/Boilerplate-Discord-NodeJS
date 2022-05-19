const mongoose = require('mongoose')
const Balance = require('../schemas/balance')
module.exports = (client) =>{
    client.createBalance = async(member) => {
        let balanceProfile = await Balance.findOne({memberId: member.id, guildId: member.guild.id})
        if(balanceProfile){
            return balanceProfile;
        }else{
            balanceProfile = await new Balance({
                _id: mongoose.Types.ObjectId(),
                guildId: member.guild.id,
                memberId: member.id
            })
            await balanceProfile.save().catch(err => console.log(err));
            return balanceProfile;
        }
    }
}
