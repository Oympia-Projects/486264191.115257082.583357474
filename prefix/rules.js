const { ButtonBuilder, ButtonStyle, SlashCommandBuilder, Client, bot, Collection, GatewayIntentBits, EmbedBuilder, Discord, ActionRowBuilder, Message } = require('discord.js');
const client = new Client({ intents: 32767}); 
//Creating discord.js client (constructor)
module.exports = {
    name: '418201416',
    description: "This is a ping command!",
    async execute(message, args, interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Announcements Ping')
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji('873139803846242314'),
                new ButtonBuilder()
                    .setCustomId('second')
                    .setLabel('Updates Ping')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('783635099626504202'),
                new ButtonBuilder()
                    .setCustomId('third')
                    .setLabel('Giveaway Ping')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('851126325124530187')
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fourth')
                    .setLabel('he/him')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('fifth')
                    .setLabel('she/her')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('seventh')
                    .setLabel('they/them')
                    .setStyle(ButtonStyle.Secondary)
            );

        const embed = new EmbedBuilder()
            .setColor('#00FFFF')
            .setTitle('Grab some self roles!')
            .setDescription("You have the option to grab **one** or grab them **all**")
            .setFooter("NOTE - If you do not like pings, avoid clicking the buttons below.");

        try {
            await message.channel.send({
                embeds: [embed],
                components: [row, row2]
            });
        } catch (error) {
            console.error(`Error sending message: ${error}`);
        }
    }
};