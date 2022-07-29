const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Pong`),
	async execute(interaction, message, client) {

        const newPingEmbed = new MessageEmbed()
        
        //.setTitle(`:stopwatch: The Ping Meter`) of choice
        .addFields(
            {name: `:robot: The Bot's Latency`, value: `**${Date.now() - message.createdTimestamp}**ms.`},
            {name: `:desktop: The API's Latency`, value: `**${Math.round(client.ws.ping)}**ms.`}
        )
        .setColor('RANDOM')
        .setFooter(`Requested by ${interaction.user}`, avatar)
        .setTimestamp()
    

        interaction.reply({embeds: [newPingEmbed]})
    }
        
}