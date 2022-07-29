const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Pong`),
	async execute(interaction, message, client) {

        const newPingEmbed = new MessageEmbed()
        
        .setDescription("🏓Pong")
        .setColor('RANDOM')
        .setFooter(`Requested by ${interaction.user}`, avatar)
        .setTimestamp()
    

        interaction.reply({embeds: [newPingEmbed]})
    }
        
}