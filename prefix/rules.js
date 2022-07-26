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
	        .setLabel('Primary')
	        .setStyle('PRIMARY')
			);


		const embed = new MessageEmbed()
			.setColor(0x0099FF)
			.setAuthor('Choose your Roles!')
      .addField(`ASDADS`, `SASAD`, false)
        message.channel.send({ embeds: [embed], components: [row] })


    }

}
          
        