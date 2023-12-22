const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const client = new Client({ intents: 32767 });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setroles')
        .setDescription(`Provides role selection options.`),

    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Announcements Ping')
                    .setStyle('DANGER')
                    .setEmoji('873139803846242314'),
                // ... (other buttons)
            );

        const embed = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('Grab some self roles!')
            .setDescription("You have the option to grab **one** or grab them **all**");

        await interaction.reply({
            embeds: [embed],
            components: [row],
        });
    },
};
