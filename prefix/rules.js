const { ButtonBuilder, ButtonStyle, SlashCommandBuilder, Client, bot, Collection, Intents, EmbedBuilder, GatewayIntentBits, Discord, MessageActionRow, Message } = require('discord.js');
const client = new Client({ intents: 32767}); 
//Creating discord.js client (constructor)
module.exports = {
    name: '418201416',
    description: "This is a ping command!",
    async execute(message, args, interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Announcements Ping')
                    .setStyle('DANGER')
                    .setEmoji('873139803846242314'),
                new MessageButton()
                    .setCustomId('second')
                    .setLabel('Updates Ping')
                    .setStyle('SUCCESS')
                    .setEmoji('783635099626504202'),
                new MessageButton()
                    .setCustomId('third')
                    .setLabel('Giveaway Ping')
                    .setStyle('PRIMARY')
                    .setEmoji('851126325124530187')
            );

        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('fourth')
                    .setLabel('he/him')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('fifth')
                    .setLabel('she/her')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('seventh')
                    .setLabel('they/them')
                    .setStyle('SECONDARY')
            );

        const embed = new MessageEmbed()
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