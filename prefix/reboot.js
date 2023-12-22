const { EmbedBuilder } = require("discord.js");

 module.exports = {
     name: 'ping',
     description: 'This',

     run: (cleint, message, args) => {
        message.reply("pong")
     }
}