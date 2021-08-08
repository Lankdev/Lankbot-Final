const discord = require('discord.js');

module.exports = {
	name: 'delchannel',
    description: 'Deletes current channel',
    usage: '&delchannel',
    group: 'moderation',
    aliases: ['remchannel'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        message.channel.delete()
    },
};