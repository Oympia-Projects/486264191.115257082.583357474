const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch'); // Make sure to install 'node-fetch' if you haven't

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dog')
        .setDescription(`Displays random dog pictures.`),
    
    async execute(interaction) {
        // Fetch data from Reddit (ensure you handle the response correctly)
        const redditData = await fetch('https://www.reddit.com/r/dogpictures/random/.json');
        const json = await redditData.json();
        
        const dogData = json[0].data.children[0].data;
        const dogDataUp = json[0].data.children[0].data.ups;
        const dogDataDown = json[0].data.children[0].data.downs;
        const dogDataComs = json[0].data.children[0].data.num_comments;

        const embed = new EmbedBuilder()
            .setTitle(`${dogData.title}`)
            .setURL(`https://reddit.com${dogData.permalink}`)
            .setImage(dogData.url)
            .setColor(0x0099FF)
            .setFooter({ text:` 👍 ${dogDataUp} 👎 ${dogDataDown} 💬 ${dogDataComs}` });



        await interaction.reply({ embeds: [embed] });
    }
};
