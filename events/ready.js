const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
      // Log the bot's username and the number of servers it's in to the console
      console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);

      client.user.setPresence({
        activities: [{ name: `GTA VI`, type: ActivityType.Competing }],
        status: 'dnd',
      });
  
      // Set the bot's presen
  
      console.log(`Bot is now active and set to "STREAMING" GTA VI`);
 
    }
}