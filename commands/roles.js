const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const client = new Client({ intents: 32767 });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setroles')
        .setDescription(`Provides role selection options.`),

    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Announcements Ping')
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji('873139803846242314'),

            );

        const embed = new EmbedBuilder()
            .setColor('#00FFFF')
            .setTitle('Grab some self roles!')
            .setDescription("You have the option to grab **one** or grab them **all**");

        await interaction.reply({
            embeds: [embed],
            components: [row],
        });
    },
};
