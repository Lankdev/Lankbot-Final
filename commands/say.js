const discord = require('discord.js');

module.exports = {
	name: 'say',
    description: 'Says a message',
    usage: '&say [message]',
    group: 'moderation',
    aliases: ['repeat'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        if(message.length >= 1500) return message.channel.send('Too long of a message!')
        const sayMessage = args.slice(1).join(" ");
        message.delete({ timeout: 500, reason: 'It had to be done.' })
        let sayauthor = message.author
        message.channel.send(`${sayMessage} Message by: ${sayauthor}`);
    },
};