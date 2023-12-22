const { Client, Discord, Intents,  Collection, Formatters, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

require('dotenv').config()


const fs = require('node:fs');
const path = require('node:path');

require("./deploy")

var client = new Client({ intents: 32767});

const config = require("./config.json");


const token = require("./config.json");

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

const commandFiles2 = fs.readdirSync('./prefix/').filter(file => file.endsWith('.js'));
for(const file of commandFiles2){
    const command = require(`./prefix/${file}`);

    client.commands.set(command.name, command);
}


client.on('messageCreate', message =>{
    if(!message.content.startsWith(process.env.prefix) || message.author.bot) return;

    const args = message.content.slice(process.env.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === '418201416'){
        client.commands.get('418201416').execute(message, args);
    }
    if(command === 'reboot'){
        client.commands.get('reboot').execute(message, args);
    }
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	} 
});

client.login(process.env.bot_token);