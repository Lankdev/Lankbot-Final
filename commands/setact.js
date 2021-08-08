const discord = require('discord.js');
const { botowner } = require('../config.json')

module.exports = {
	name: 'setact',
    description: 'Sets the bot activity',
    usage: '&setact [act]',
    group: 'owner',
    aliases: ['activity'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.author.id != botowner) return message.channel.send('This is an owner command.')
        message.delete({ timeout: 100, reason: 'Delete' })
        if(!args[1]) return bot.user.setActivity(`&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });
        let newstat = args.slice(1).join(" ")
        bot.user.setActivity(`${newstat}`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });
        message.channel.send(`Activity now set to "${newstat}"`)
    },
};