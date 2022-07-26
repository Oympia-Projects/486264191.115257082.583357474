const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription(`Roll's a random number between 1-100.`),
	async execute(interaction, message, client) {

                var roll = (Math.floor(Math.random()*100)+1);
                if (roll <= 100) {
            }

            const exampleEmbed = new MessageEmbed()
            .setColor('#00FFFF')
            .setDescription(`🎲 ${interaction.user} **Rolled** 🎲 `)
            .addField(`**${roll}**`, '** **', true)
        interaction.reply({embeds: [exampleEmbed]})
    }
        
}