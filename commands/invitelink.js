const discord = require('discord.js');

module.exports = {
	name: 'invitelink',
    description: 'Bot Invite Link',
    usage: '&invitelink',
    group: 'info',
    aliases: ['inv'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=673571065280069680&scope=bot&permissions=8')
        message.delete({ timeout: 500, reason: 'It had to be done.' });
    },
};
