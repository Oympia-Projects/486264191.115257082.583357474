const { Client, bot, Collection, Intents, MessageEmbed, GatewayIntentBits, Discord, MessageButton, MessageActionRow, Message } = require('discord.js');
const client = new Client({ intents: 32767}); 

module.exports = {
    name: 'reboot',
    description: "Staff Utilites",
	async execute(message, interaction, args, Discord) {

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('sonic')
					.setLabel('YES')
					.setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('second2')
                    .setLabel('NO')
                    .setStyle('DANGER')
			);

        
        const rEmbed = new MessageEmbed()
            .setColor('#00FFFF')
            .setAuthor('Are you sure you want to reboot the bot')
            .setDescription('Important commands and specifc events such as the authenticator will be unavaliable.')
	
	        .setFooter("Click Yes to Restart | Click No to Cancel")
        message.channel.send({ embeds: [rEmbed], components: [row]})

            }
}