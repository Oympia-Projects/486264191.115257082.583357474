const { Client, Discord, Intents,  Collection, Formatters, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

require('dotenv').config()


const fs = require('node:fs');
const path = require('node:path');

require("./deploy")

var client = new Client({ intents: 32767});

const config = require("./config.json");


const token = require("./config.json");

const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    } else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
}

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

		var channel = client.channels.cache.get("982827506950344814")

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

		if(command === '418201416'){
			client.commands.get('418201416').execute(message, args);
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

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.buttons = new Collection();

  client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "primary") {

		const member = interaction.member;

		if (member.roles.cache.has('1001607762444304506')) {
			member.roles.remove('1001607762444304506');

			return interaction.reply({ content: `❌ Removed the <@&1001607762444304506> role from you `, ephemeral: true,})
		} else {
			member.roles.add('1001607762444304506');
			return interaction.reply({ content: ' ✅ Granted you the <@&1001607762444304506> role ', ephemeral: true,})
		}
	}
  });

  client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "second") {

		const member = interaction.member;

		if (member.roles.cache.has('1001607584781963377')) {
			member.roles.remove('1001607584781963377');

			return interaction.reply({ content: `❌ Removed the <@&1001607584781963377> role from you `, ephemeral: true,})
		} else {
			member.roles.add('1001607584781963377');
			return interaction.reply({ content: ' ✅ Granted you the <@&1001607584781963377> role ', ephemeral: true,})
		}
	}
  });
client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "third") {

		const member = interaction.member;

		if (member.roles.cache.has('1001607887598145636')) {
			member.roles.remove('1001607887598145636');

			return interaction.reply({ content: `❌ Removed the <@&1001607887598145636> role from you `, ephemeral: true,})
		} else {
			member.roles.add('1001607887598145636');
			return interaction.reply({ content: ' ✅ Granted you the <@&1001607887598145636> role ', ephemeral: true,})
		}
	}
})

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "fourth") {

		const member = interaction.member;

		if (member.roles.cache.has('981347798467350539')) {
			member.roles.remove('981347798467350539');

			return interaction.reply({ content: `❌ Removed the <@&981347798467350539> role from you `, ephemeral: true,})
		} else {
			member.roles.add('981347798467350539');
			return interaction.reply({ content: ' ✅ Granted you the <@&981347798467350539> role ', ephemeral: true,})
		}
	}
})

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "fifth") {

		const member = interaction.member;

		if (member.roles.cache.has('981347867774050365')) {
			member.roles.remove('981347867774050365');

			return interaction.reply({ content: `❌ Removed the <@&981347867774050365> role from you `, ephemeral: true,})
		} else {
			member.roles.add('981347867774050365');
			return interaction.reply({ content: ' ✅ Granted you the <@&981347867774050365> role ', ephemeral: true,})
		}
	}
})

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === "seventh") {

		const member = interaction.member;

		if (member.roles.cache.has('981347896622452776')) {
			member.roles.remove('981347896622452776');

			return interaction.reply({ content: `❌ Removed the <@&981347896622452776> role from you `, ephemeral: true,})
		} else {
			member.roles.add('981347896622452776');
			return interaction.reply({ content: ' ✅ Granted you the <@&981347896622452776> role ', ephemeral: true,})
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

	const logChannel = client.channels.cache.get('984160424251490334')
	const messageDelete2 = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('❌ Message Deleted')
	.addField('Deleted By', ` ${message.author} - (${message.author.id})`, true)
	.addField('Sent By', ` ${message.user} -`, false)
	.addField('Message', `\`${message.content}\``, false)
	.setTimestamp()


	logChannel.send({ embeds: [messageDelete2]})
})

client.login(process.env.bot_token);
