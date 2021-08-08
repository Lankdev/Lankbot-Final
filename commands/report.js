const discord = require('discord.js');

module.exports = {
	name: 'report',
    description: 'Creates a report',
    usage: '&report [issue]',
    group: 'ect',
    cooldown: 120,
    aliases: ['err'],
    guildOnly: false,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!args[1]) return message.channel.send('Usage: &report <error you want to report to the devs>');
        let reportslice = args.slice(1).join(" ")
        let reportingserver = message.guild;
        const reportEmbed = new discord.MessageEmbed()
        .setTitle('Report')
        .setDescription(reportslice)
        .setAuthor(`ID: ${message.author.id} Username: ${message.author.username}`)
        .setColor('#FF0000')
        .setFooter(`Guild: ${reportingserver}`)
        bot.channels.cache.get('673704363633410058').send(reportEmbed);
        message.channel.send('Your report was sent to the Lankbot Developers!')
    },
};