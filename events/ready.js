module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
      //Log Bot's username and the amount of servers its in to console
      console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);

      //Set the Presence of the bot user
      client.user.setActivity("GTA VI", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=O91DT1pR1ew"
      });

  }
}
