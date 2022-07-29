const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Discord, MessageEmbed } = require("discord.js");

var client = new Client({ intents: 32767});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription(`ban's a user/member from the server temporarily or permanently.`)
        .addUserOption((option) => option.setName('user').setDescription('The person who you want to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason to ban member').setRequired(true)),

    async execute(interaction, client, message) {

        const user = interaction.options.getUser('user');
 
        const exampleEmbed = new MessageEmbed()
        .setColor('#00FFFF')
        .setDescription(`You lack the following **permissions** | \`BAN_MEMBERS\``)

        if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ embeds: [exampleEmbed], ephemeral: true })

        const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

        const reason = interaction.options.getString('reason')

        if(!member.bannable || member.user.id === user) 
        return interaction.reply("Check Console");
        
        if(interaction.member.roles.highest.position <= member.roles.highest.position) 
        return interaction.reply('Discord Hierarchy is a thing Check Console.')
        
        const embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`${member.user} was banned | \`${member.user.id}\``)   

        const bambed = new MessageEmbed()
        .setAuthor('Olympia Discord')
        .setColor("00ffff")
        .setTitle(`You were banned by: \`${interaction.user.tag}\``)
        .setDescription(`Reason: \`${reason}\``)
        .setTimestamp()

        
        const bambed2 = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`What is tommrow`)   

        await member.user.send({ embeds: [bambed]}).catch(err => {})

        member.ban({ reason })

        return interaction.reply({ embeds: [ embed ]}).then(() => console.log(`Banned ${member.displayName}`))
        .catch(console.error);

    },
    
};