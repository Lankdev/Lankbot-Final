const discord = require('discord.js');

module.exports = {
	name: 'clear',
    description: 'Clears Messages',
    usage: '&clear [Amount]',
    group: 'moderation',
    aliases: ['purge'],
    guildOnly: true,
    cooldown: 15,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        if(args[1] <= 100 && 1 <= args[1]){
        if(!args[1]) return message.reply('Usage = \'&clear (amount)\'')
        message.channel.bulkDelete(args[1]).then(() => {message.channel.send(`I've deleted ${args[1]} messages! (And ill delete this one!)`).then(msg => msg.delete({ timeout: 2000, reason: 'del' }))});
        } else {
            message.channel.send('The amount has the be between 2-100')
        }
    },
};