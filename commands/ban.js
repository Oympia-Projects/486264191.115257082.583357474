const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Discord } = require("discord.js");

var client = new Client({ intents: 32767});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Removes a user from the server.')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Enter a reason').setRequired(true)),
    async execute(interaction, message) {

        return interaction.followUp({ content: "You lack the following permissions \`'BAN_MEMBERS & KICK_MEMBERS \`"})
        

    }
}
