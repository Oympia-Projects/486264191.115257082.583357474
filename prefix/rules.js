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
	        .setStyle('DANGER')
			.setEmoji('873139803846242314'),

          new MessageButton()
	        .setCustomId('second')
	        .setLabel('Updates Ping')
	        .setStyle('PRIMARY')
			.setEmoji('783635099626504202'),

          new MessageButton()
	        .setCustomId('third')
	        .setLabel('Giveaway Ping')
	        .setStyle('SUCCESS')
			.setEmoji('851126325124530187'),
			)

		const embed = new MessageEmbed()
			.setColor(0x0099FF)
			.setTitle('Grab some self roles!')
      		.setDescription(" You have the option to grab **one** or grab them **all**")
			.setFooter("NOTE - If you do not like pings avoid clicking the buttons below.")
        message.channel.send({ embeds: [embed], components: [row] })


    }

}
          
        