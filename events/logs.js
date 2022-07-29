const Collection = require("discord.js")

const snipes = new Collection();

module.exports = {
    name: 'ready',
    once: false,
    execute(client) {
        //Log Bot's username and the amount of servers its in to console
        client.on('messageDelete', message => {
            snipes.set(message.channel.id, message)
        
            const logChannel = client.channels.cache.get('984160424251490334')
            const messageDelete2 = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('Message Deleted')
            .addField('Message Sent By:', ` <@${message.author.id}> -*${message.author.tag}*`, true)
            .addField('Channel:', `<#${message.channel.id}> - ** **`, false)
            .addField('Message:', `\`${message.content}\``, false)
            .setTimestamp()
        
        
            logChannel.send({ embeds: [messageDelete2]})
        })
  
    }
  }