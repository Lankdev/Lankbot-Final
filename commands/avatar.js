const discord = require('discord.js');

module.exports = {
	name: 'avatar',
    description: 'Shows user avatar',
    usage: '&avatar [@user]',
    group: 'info',
    aliases: ['pfp', 'icon'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        let targetavatar = message.mentions.users.first() || message.author
        message.channel.send(targetavatar.displayAvatarURL())
    },
};