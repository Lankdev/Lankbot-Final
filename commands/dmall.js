const discord = require('discord.js');

module.exports = {
	name: 'dmall',
  description: 'DMs everyone in the server',
  usage: '&dmall [Message]',
  group: 'moderation',
  aliases: ['msgall'],
  guildOnly: true,
  cooldown: 20,
  exclusive: false,
	async execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command.')
      if(!args[1]) return message.channel.send('You cant send an empty message.')
      let text = message.content.slice('&dmall'.length);
      await message.channel.send('Sending...')
      try{
        await message.guild.members.cache.forEach(member => {
          if (member.id != bot.user.id && !member.user.bot) member.send(text);
        });
        await message.channel.send('Messages Sent!')
      } catch (err) {
        console.log(`Could not send message to a user. ${err}`)
      } 
      message.delete({ timeout: 100, reason: 'It had to be done.' });
    },
};