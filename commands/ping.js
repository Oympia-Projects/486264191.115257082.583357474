const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('See if the bot is working correctly'),
    async execute(interaction) {
        return interaction.reply({ content: 'Pong', ephemeral: false });
    },
};