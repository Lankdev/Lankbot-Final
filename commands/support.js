const discord = require('discord.js');

module.exports = {
	name: 'support',
    description: 'Links Support Server',
    usage: '&support',
    group: 'info',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        message.channel.send('https://discord.gg/And9qdT')
        message.delete({ timeout: 500, reason: 'It had to be done.' });
    },
};