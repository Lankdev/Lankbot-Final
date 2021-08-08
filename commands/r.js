const discord = require('discord.js');

module.exports = {
	name: 'r',
    description: 'Deletes Latest message',
    usage: '&r',
    group: 'moderation',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 1,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        if(!args[1]){
            message.channel.bulkDelete(2)
        }
        if (args[1] === 'help'){
            message.channel.send('Usage: &r\nWhat it does: Delete newest message in chat')
        }
    },
};