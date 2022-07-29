const { SlashCommandBuilder } = require('@discordjs/builders');
const { Discord, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('suggest')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('suggest')
			.setDescription(`Can suggest and idea to the suggestion's channel`)
			.setRequired(true)),


    async execute(interaction, message, args, cmd, client, discord) {

		var channel = client.channels.cache.get("982830831804510218")
          if(!channel) return message.channel.send('suggestions channel does not exist!');

        const embed = new MessageEmbed()
        .setColor('00FFFF')
        .setDescription(`**Suggestion from** ${interaction.user}`)
        .addField(`\`${interaction.options.getString('suggest')}\``, '** **', true)

        .addField('React to Agree Or Disagree!', '** **', false)

        .setFooter('© 2022 Olympia')

        interaction.reply({ embeds: [embed], fetchReply: true }).then((msg) => {
            msg.react("👍"),
            msg.react("👎")

    })
}
}
