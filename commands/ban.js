const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Discord, EmbedBuilder, Permissions } = require("discord.js");

var client = new Client({ intents: 32767 });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription(`Ban a user/member from the server temporarily or permanently.`)
        .addUserOption((option) => option.setName('user').setDescription('The person you want to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the ban').setRequired(true)),

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');

        // Check if the user has the BAN_MEMBERS permission
        if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            const exampleEmbed = new EmbedBuilder()
                .setColor('#00FFFF')
                .setDescription(`You lack the following **permissions** | \`BAN_MEMBERS\``);

            return interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
        }

        const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(() => null);

        if (!member || !member.bannable || member.user.id === user.id) {
            return interaction.reply("There was an issue with banning the user. Check console.");
        }

        if (interaction.member.roles.highest.position <= member.roles.highest.position) {
            return interaction.reply('You cannot ban this user due to Discord hierarchy.');
        }

        const embed = new EmbedBuilder()
            .setColor("00FFFF")
            .setDescription(`${member.user} was banned | \`${member.user.id}\``);

        const bambed = new EmbedBuilder()
            .setAuthor('Olympia Discord')
            .setColor("00FFFF")
            .setTitle(`You were banned by: \`${interaction.user.tag}\``)
            .setDescription(`Reason: \`${reason}\``)
            .setTimestamp();

        // Attempt to DM the user about the ban
        await member.user.send({ embeds: [bambed] }).catch(() => {}); // Silence the catch for now

        // Ban the user
        await member.ban({ reason }).catch(() => {
            return interaction.reply("There was an error while trying to ban the user.");
        });

        return interaction.reply({ embeds: [embed] }).then(() => {
            console.log(`Banned ${member.displayName}`);
        }).catch(console.error);
    },
};
