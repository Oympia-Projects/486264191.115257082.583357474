const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

let moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.')
        .addUserOption(option => option.setName('user').setDescription('The user you would like to find out about!')),
	async execute(interaction) {
        const user = interaction.options.getUser('user');

        const embed = new MessageEmbed()
        .setColor('00FFFF')
        .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true})}`})
        .addField('**Joined: **', `${moment(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
        .addField(`Account Created:`, `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
				.addField('Is a Bot:', `\`${user.bot}\``, true)
	 	    .addField('UserID:', `\`${user.id}\``, true)
				.setThumbnail(`${user.displayAvatarURL({ dynamic: true})}`)
				.addField("Roles:", `${user.roles.fetch.map(r => r).join(' ').replace("@everyone", " ")}`)
        .setFooter('© 2022 Olympia')

        if (user) return interaction.reply({ embeds: [embed] })
	},
};
