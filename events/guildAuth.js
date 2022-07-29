client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.channels.cache.find(c => c.name === "welcome").send(`"${member.user.username}" has joined this server`);
  });