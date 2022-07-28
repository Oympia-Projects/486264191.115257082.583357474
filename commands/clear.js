const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Discord, Intents,  Collection, Formatters, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

var client = new Client({ intents: 32767});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription(`Clear's User Messages!`)
        .addIntegerOption(option => {
           return option
                .setName('amount')
                .setDescription(`How many messages would you like to delete?`)
                .setRequired(true)
}  ),
    async execute(interaction) {

        if(!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply('You lack permissions')
        if(!interaction.guild.me.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content : 'You lack permissions'})
        let amount = interaction.options.getInteger('amount')

        if(parseInt(amount) > 100) {
            return interaction.reply({ content: 'You can only delete 100 messages at a time.'})
        } else {
            let { size } = await interaction.channel.bulkDelete(amount)
            await interaction.reply({ content: `${size} Messages Deleted`, ephemeral: false,})

        }
    },
};
