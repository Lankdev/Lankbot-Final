const discord = require('discord.js');

module.exports = {
	name: 'poll',
    description: 'Starts a poll',
    usage: '&poll[message]',
    group: 'moderation',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
            const pollembed = new discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle("Make a Poll")
            .setDescription("&poll (Queston) to make a simple yes or no poll.");

            if(!args[1]){
                message.channel.send(pollembed);
            } else {

            let pollArgs = args.slice(1).join(" ");

            message.channel.send(`📋 **${pollArgs}**`).then(messagereactionpoll => {
                messagereactionpoll.react("👍");
                (500)
                messagereactionpoll.react("👎");
                message.delete({ timeout: 500, reason: 'It had to be done.' })
            })
        }
    },
};