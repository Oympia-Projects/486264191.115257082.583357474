const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Roll's a random number between 1-100.`),
	async execute(interaction, message, client) {

        const exampleEmbed = new MessageEmbed()
            .setColor('#00FFFF')
            .setDescription(` **:ping_pong:Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.:ping_pong:**`)
        interaction.reply({embeds: [exampleEmbed]})
    }
        
}