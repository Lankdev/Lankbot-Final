const discord = require('discord.js');

module.exports = {
    name: 'react',
    description: 'reacts to the command',
    usage: '&react',
    group: 'ect',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
    execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim){
        message.react('<:online:746880594570641418>')
    },
}