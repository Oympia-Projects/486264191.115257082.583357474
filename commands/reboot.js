const { Client, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: 32767 });
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reboot')
        .setDescription('Refresh the bots uptime.'),
    async execute(message, interaction, args, Discord) {

        const rEmbed = new EmbedBuilder()
            .setColor('#00FFFF')
            .setAuthor({ name: 'Are you sure you want to reboot the bot'})
            .setDescription('Important commands and specific events such as the authenticator will be unavailable.');
            
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('confirm')
                    .setLabel('Confirm Yes')
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId('Decline')
                    .setLabel('Decline No')
                    .setStyle(ButtonStyle.Danger)
            );

            if (message) {
                await message.channel.send({ embeds: [rEmbed], components: [row] });
            } else if (interaction) {
                await interaction.reply({ embeds: [rEmbed], components: [row] });
    
                const filter = i => i.customId === 'confirm' || i.customId === 'Decline';
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
    
                collector.on('collect', async i => {
                    if (i.customId === 'confirm') {
                        await i.update({ content: 'Rebooting...', components: [] });
                        
                        // Gracefully disconnect from Discord
                        await client.destroy();
                        
                        // Log message about rebooting
                        console.log('Bot is being rebooted... You may need to restart the bot manually.');
                    } else if (i.customId === 'Decline') {
                        await i.update({ content: 'Reboot declined.', components: [] });
                    }
                });
    
                collector.on('end', collected => {
                    if (collected.size === 0) {
                        interaction.editReply({ content: 'Reboot timed out.', components: [] });
                    }
                });
            }
        }
    }