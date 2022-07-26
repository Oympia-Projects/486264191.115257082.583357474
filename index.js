const { Client, Discord, Intents,  Collection, Formatters, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

require('dotenv').config()


const mongo_dbsrv = 'mongodb+srv://Mufasaa:asjSgMLqCbP1h2X1@olympia.gwwld.mongodb.net/test';

const fs = require('node:fs');
const path = require('node:path');

require("./deploy")

var mongoose = require('mongoose');

var client = new Client({ intents: 32767});

const config = require("./config.json");


const token = require("./config.json");

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'New Member');

    guildMember.roles.add(welcomeRole);
})

client.on('guildMemberAdd', async (member, message) => {

	let auth = ["3752274716", "6852260012","7770680710", "5999389868", "4240074889", "3794360075", "7657315425", "2460611255", "2708423480" ];

	var authAuth = auth[Math.floor(Math.random() * auth.length)];

	const authbed = new MessageEmbed()
	.setColor('00FFFF')
	.setTitle('')
	.setDescription("Paste the following Captcha in the Authentication Channel!")
	.addField('Your Captcha:', `${authAuth}`, true)


	member.send({ embeds: [authbed]});

})

client.on('message', async message => {

	let auth = ["3752274716", "6852260012","7770680710", "5999389868", "4240074889", "3794360075", "7657315425", "2460611255", "2708423480" ];

	if(message.author.bot) return;

	if(auth.indexOf(message.content) != -1 && message.channel.id === '982827506950344814')
	{

		var channel = client.channels.cache.get("<channel id>")

		let roleID = "981670451887628358";
		let roleID2 = "982824670074138636";

			message.member.roles.add(roleID)
			message.member.roles.remove(roleID2)

	}
	})

	client.on('messageCreate', message =>{
		if(!message.content.startsWith(process.env.prefix) || message.author.bot) return;

		const args = message.content.slice(process.env.prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if(command === 'selfroles'){
			client.commands.get('selfroles').execute(message, args);
		}
		if(command === 'reboot'){
			client.commands.get('reboot').execute(message, args);
		}
	});



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

const activities_list = [
  { type: 'STREAMING',  message: 'Cherry Sleep | /help'  },
  { type: 'WATCHING', message: 'VuDu Eat | /help' },
  { type: 'LISTENING', message: 'Vudu Eat Again | /help' },
];


client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

      client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
  }, 2000);

  client.user.setStatus('dnd');
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.buttons = new Collection();

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "sonic") {

		const chan2 = client.channels.cache.get('999950546729451530')

		interaction.reply({ content: 'Restarting... Estimated Wait Time (20 seconds)'}).then(msg => {
			setTimeout(function(){
				chan2.send({ content: 'Bot is Online ~ Everything is Functional'})
		}, 10000);
		  })
		  .then(client.destroy())
		  .then(client.login('OTg4MDkyMjk4MzYzNTM5NDc2.Gon1do.Wuq_UZ68BVaze6WDPrSiioAVI1VLif3oXneMy8'))
		  .then(client.user.setStatus('dnd'));



		client.destroy();
		client.login(process.env.bot_token);

	}
})

  client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "primary") {

		const member = interaction.member;

		if (member.roles.cache.has('996476176728072342')) {
			member.roles.remove('996476176728072342');

			return interaction.reply({ content: `❌ Removed the <@&996476176728072342> role from you `, ephemeral: true,})
		} else {
			member.roles.add('996476176728072342');
			return interaction.reply({ content: ' ✅ Granted you the <@&996476176728072342> role ', ephemeral: true,})
		}
	}
  });

  client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "second") {

		const member = interaction.member;

		if (member.roles.cache.has('1001599815030931517')) {
			member.roles.remove('1001599815030931517');

			return interaction.reply({ content: `❌ Removed the <@&1001599815030931517> role from you `, ephemeral: true,})
		} else {
			member.roles.add('1001599815030931517');
			return interaction.reply({ content: ' ✅ Granted you the <@&1001599815030931517> role ', ephemeral: true,})
		}
	}
  });
client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "third") {

		const member = interaction.member;

		if (member.roles.cache.has('1001599780742500553')) {
			member.roles.remove('1001599780742500553');

			return interaction.reply({ content: `❌ Removed the <@&1001599780742500553> role from you `, ephemeral: true,})
		} else {
			member.roles.add('1001599780742500553');
			return interaction.reply({ content: ' ✅ Granted you the <@&1001599780742500553> role ', ephemeral: true,})
		}
	}
})

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

const snipes = new Collection();

client.on('messageDelete', message => {
	snipes.set(message.channel.id, message)

	const logChannel = client.channels.cache.get('508978914928885772')
	const messageDelete2 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('❌ Message Deleted')
	.addField('Deleted By', ` ${message.author} - (${message.author.id})`, true)
	.addField('Sent By', ` ${message.user} -`, false)
	.addField('Message', `\`${message.content}\``, false)
	.setTimestamp()


	logChannel.send({ embeds: [messageDelete2]})
})

mongoose.connect(config.mongo_dbsrv, {
}).then(()=>[
	console.log('Database connection established')
])

client.login(process.env.bot_token);
