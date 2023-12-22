const { SlashCommandBuilder } = require('@discordjs/builders');

const { EmbedBuilder } = require('discord.js');

let moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself.')
        .addUserOption(option => option.setName('user').setDescription('The user you would like to find out about!')),
	async execute(interaction) {
        const user = interaction.options.getUser('user');

        const embed = new EmbedBuilder()
        .setColor('00FFFF')
        .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
        .addFields(
          { name: '**Joined:**', value: `${moment.utc(user.joinedAt).format('MM/DD/YY')}`, inline: true },
          { name: 'Account Created:', value: `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, inline: true },
          { name: 'Is a Bot:', value: `\`${user.bot}\``, inline: true },
          { name: 'UserID:', value: `\`${user.id}\``, inline: true },
          // Check if user.roles is defined before using map
          { name: 'Roles:', value: user.roles ? user.roles.map(r => `${r}`).join(' | ') : 'No roles' }
        )
        .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
        

        if (user) return interaction.reply({ embeds: [embed] })
	},
};
