module.exports = () =>{
    client.on('ready', () => {
	  
        client.user.setActivity({
            type: "STREAMING",
            url: "https://www.twitch.tv/#"
          });
      });
      

    console.log('Bot is Online')
}