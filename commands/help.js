const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription(`Display's a list of commands!`),
	async execute(interaction, message) {

		const embed1 = new MessageEmbed()
		.setColor('#00FFFF')
		.setAuthor('Olympia Main | /help')
		.setDescription(`Some of following category's store cool commands & features
		You can utilize through out the server!`)
		.addFields(
			{ value: '** **', name: ' <:nethersword:991696704892063775> General Commands: ' },
			{ value: `Shows a list of commands.`, name: '/help', inline: false },
			{ value: `Display's information about the server.`, name: '/server-info:', inline: false },
			{ value: `Display's information of a specific user or yourself.`, name: '/user-info:', inline: false },
			{ value: `Shows information about a specific user's roles or your roles.`, name: '/role-check:', inline: false },
			{ value: `Display's information about the server.`, name: '/server-info', inline: false },
		)
		
		.addFields(
			{ value: '** **', name: '<:Enchantedgoldenapple:991696591947825282>  Entertainment Commands: ' },
			{ value: `Picks a random meme from reddit.`, name: '/meme', inline: false },
			{ value: `Print's random cat pictures.`, name: '/cat', inline: false },
			{ value: `Print's random dog pictures.`, name: '/dog', inline: false },
			{ value: `Roll's a random number between 1-100.`, name: '/roll', inline: false },
			{ value: `Can slap a specific user in the server.`, name: '/slap', inline: false },
			{ value: `Can hack a specific user`, name: '/hack', inline: false },
		)	

		.addFields(
			{ value: '** **', name: '<:nethers:991696560616374332> Misc Commands: ' },
			{ value: `Can suggest and idea you have in mind, in the <#987539375317467206>`, name: '/suggest' },
			{ value: '\`More Coming Soon\`', name: '** **' },
		)

		.setFooter('© 2022 | Olympia ');
				return interaction.reply({ embeds: [embed1], ephemeral: true });
				}
			}