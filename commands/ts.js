const discord = require('discord.js');
const { botowner } = require('../config.json');

module.exports = {
	name: 'ts',
    description: 'Terminate Session',
    usage: '&ts',
    group: 'owner',
    aliases: ['term'],
    guildOnly: false,
    cooldown: 1,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.author.id != botowner) return message.channel.send('This is an owner command.')
        process.exit()
    },
};