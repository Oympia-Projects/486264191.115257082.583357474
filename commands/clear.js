const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Permissions, Discord, GatewayIntentBits,  Collection, Formatters, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");

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

        const MANAGE_MESSAGES_PERMISSION = BigInt(0x00002000);

        const perm = new EmbedBuilder()
            .setColor(0x2f2d2d)
            .setTitle('You lack the following permissions.')
            .setAuthor({ name: 'Mr. Leaf', iconURL: 'https://avatars.akamai.steamstatic.com/e0a7a39aa98b79bea6467242cd85c9a3251bc1c5_full.jpg'})
            .addFields(
                { name: 'You lack the following permissions.', value: '[MANAGE_MESSAGES]' },
            )
            .setDescription('{ MANAGE_MESSAGES }')
        if (!interaction) {
            return; // or handle the error accordingly
        }
        // Check if interaction member and guild are defined
        if (!(interaction.member.permissions.bitfield & MANAGE_MESSAGES_PERMISSION)) {
            return interaction.reply({ embeds: [perm], ephemeral: true });
        }


        let amount = interaction.options.getInteger('amount')

        if(parseInt(amount) > 100) {
            return interaction.reply({ content: 'You can only delete 100 messages at a time.'})
        } else {
            let { size } = await interaction.channel.bulkDelete(amount)
            await interaction.reply({ content: `${size} Messages Deleted`, ephemeral: true,})

        }
    },
};