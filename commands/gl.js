const discord = require('discord.js');
const { botowner } = require('../config.json')

module.exports = {
	name: 'gl',
    description: 'Guild List',
    usage: '&gl',
    group: 'owner',
    aliases: ['servers'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.author.id != botowner) return message.channel.send('This is an owner command.')
        const gl = bot.guilds.cache.filter(g => g.memberCount > 0).map(g => g.name).join(", ")
        const glembed = new discord.MessageEmbed()
        .setTitle('Guild List')
        .setDescription(gl)
        .setColor("0xFF0000")
        message.channel.send(glembed)
    },
};