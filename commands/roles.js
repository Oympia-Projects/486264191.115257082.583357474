const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents,  Collection, Formatters, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js"); //Define the discord.js module
const client = new Client({ intents: 32767}); //Creating discord.js client (constructor)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('self-roles')
		.setDescription(`Roll's a random number between 1-100.`),
	    execute(interaction, message, channel, client) {

            const selfroles = new MessageEmbed()
	            selfroles.setColor('#0099ff')
                selfroles.setAuthor('/self-roles')
                selfroles.setTitle('Self Roles')
	            selfroles.setDescription('It is likely that you will be pinged often from these roles, \n avoid from clicking the buttons if you do not want to be pinged.')
                selfroles.setFooter('Only use this command in the bot commands channel.')

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Primary')
                        .setStyle('PRIMARY'),
                );

                const selfrole2 = new MessageEmbed()
	            selfroles.setColor('#0099ff')
	            selfroles.setDescription('These are a list of roles that you are able to choose from!')
                selfroles.setFooter('Only use this command in the bot commands channel.')

        message.channel.send({ embeds: [selfroles], components: [row], ephemeral: true, });

        const filter = i => i.customId === 'primary';

        const collector = message.channel.createMessageComponentCollector({ filter, time: 50000 });
        
        collector.on('collect', async i => {
            deferReply()

            if (i.customId === 'primary') {
                await i.send({ content: 'A button was clicked!', ephemeral: true, embeds: [selfroles2] });
            }
        });
        
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));


    }

}

    
        


        
