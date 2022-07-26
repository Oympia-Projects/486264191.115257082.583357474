const { Client, bot, Collection, Intents, MessageEmbed, GatewayIntentBits, Discord, MessageButton, MessageActionRow, Message } = require('discord.js');
const client = new Client({ intents: 32767}); 
//Creating discord.js client (constructor)
module.exports = {
    name: 'rules',
    description: "this is a ping command!",
    async execute(message, args, interaction){
      const row = new MessageActionRow()
			.addComponents(
                new MessageButton()
	        .setCustomId('primary')
	        .setLabel('Annoucements Ping')
	        .setStyle('DANGER'),

          new MessageButton()
	        .setCustomId('second')
	        .setLabel('Updates Ping')
	        .setStyle('PRIMARY'),

          new MessageButton()
	        .setCustomId('third')
	        .setLabel('Giveaway Ping')
	        .setStyle('SUCCESS')
			);


		const embed = new MessageEmbed()
			.setColor(0x0099FF)
			.setAuthor('Get yourself some Ping Roles')
      .setDescription("You will be **ping** from all of these roles for there intended purpose")
        message.channel.send({ embeds: [embed], components: [row] })


    }

}
          
        