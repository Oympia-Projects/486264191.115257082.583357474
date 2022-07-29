setInterval(
    async () => {
      try {
        const message = await bot.channels.get('982830831804510218').fetchMessage('1001750286550978602')
        await message.edit(new Discord.RichEmbed(boosterembed).setDescription('Last Time updated: '))
      } catch (error) {
        console.error(error)
      }
    },
    1000
  )