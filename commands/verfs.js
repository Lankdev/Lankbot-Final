const discord = require('discord.js');
const { botowner } = require('../config.json');

module.exports = {
    name: "verfs",
    description: "Verifies a server (owner only)",
    usage: "&verfs",
    group: "owner",
    guildOnly: true,
    aliases: ['verify', 'verifyserver'],
    cooldown: 5,
    exclusive: true,
    execute(message, args1, bot, verifiedServers, db, lbadmin, ytdl, fetch, urban, trim, verifDB){
        if(message.author.id == botowner){
            verifDB.set(message.guild.id, message.guild.name)
            message.channel.send('This guild was verified!')
        } else {
            message.channel.send('This is an owner command.')
        }
    },
}