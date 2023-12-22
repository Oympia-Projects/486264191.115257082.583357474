const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription(`Roll's a random number between 1-100.`),
	async execute(interaction, message, client) {

                var roll = (Math.floor(Math.random()*100)+1);
                if (roll <= 100) {
            }

            const exampleEmbed = new EmbedBuilder()
            .setColor('#00FFFF')
            .setDescription(`🎲 ${interaction.user} **Rolled** 🎲`)
            .addFieldss(
                { name: 'Roll Result', value: `**${roll}**` } // Assuming 'roll' contains the value you want to display.
            );
        
        interaction.reply({ embeds: [exampleEmbed] });
        
    }
        
}