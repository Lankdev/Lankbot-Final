const discord = require('discord.js');

module.exports = {
	name: 'uptime',
    description: 'Shows bot uptime',
    usage: '&uptime',
    group: 'info',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        let totalSeconds = (bot.uptime / 1000);

        let hours = Math.floor(totalSeconds / 3600);

        totalSeconds %= 3600;

        let minutes = Math.floor(totalSeconds / 60);
            
        let seconds = totalSeconds % 60;

        let secondsminusdecimal = Math.floor(seconds + ``)

        let uptime = `${hours} hours, ${minutes} minutes and ${secondsminusdecimal} seconds`;

        message.channel.send(uptime)
    },
};