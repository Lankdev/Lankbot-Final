const discord = require('discord.js');

module.exports = {
	name: 'msgmember',
    description: 'msgs a member',
    usage: '&msgmember [user id] [message]',
    group: 'owner',
    aliases: ['msgmem'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(!lbadmins) return message.channel.send('This is a Lankbot Administrator Command!')
        message.delete({ timeout: 500, reason: 'To clear bot-lag of spammed admin commands.'})
        let msgreciver = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
        let msgslice = args.slice(2).join(" ")
        let msgauthor = message.author
        msgreciver.send(`${msgslice} *(Send your feedback in this DM.)*`)
        message.author.send(`Your message was Succesfuly Send! *${msgslice}*`)
        const msgmemberembed = new discord.MessageEmbed()
        .setTitle('Alert')
        .setDescription(`User used the MSG Command! | The user was: ${msgauthor}. | They sent: "${msgslice}" | To: ${msgreciver}`)
        .setColor('0xFF0000')
        .setFooter('Lankbot Alerts')
        bot.channels.cache.get('756893613459374080').send(msgmemberembed)
    },
};