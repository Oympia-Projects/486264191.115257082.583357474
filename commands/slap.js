const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slap')
        .setDescription('Can slap a specific user in the server.')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to slap')
                .setRequired(true)
        ),
    async execute(interaction) {
        return interaction.reply(`${interaction.user} slapped ${interaction.options.getUser('user')}`)
    },
};