const discord = require('discord.js');

module.exports = {
	name: 'user-info',
    description: 'Shows info about a user',
    usage: '&user-info [@user]',
    group: 'info',
    guildOnly: true,
    aliases: ['none'],
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.channel.type === 'dm'){
            message.channel.send('Please do this command in a server, Here is one you can try it in: https://discord.gg/And9qdT')
        } else {
        const userinfomemberconst = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let user = message.mentions.users.first() || message.author;

        const userinfoembed = new discord.MessageEmbed()
        .setTitle('**User Information**')
        .setColor(`RANDOM`)
        .addField('**Username**', `${userinfomemberconst.user.tag}`)
        .addField("**Status**", `${user.presence.status}`, true)
        .addField("**Bot**", `${user.bot}`, true)
        .addField("**Nickname**", `${userinfomemberconst.nickname !== null ? `<:white_check_mark:425632265993846795> Nickname: ${userinfomemberconst.nickname}` : "<:x:425632070036094986> None"}`, true)
        .addField("**Roles**", `${userinfomemberconst.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || ":x: No Roles"}`)
        .addField("**Joined Discord At**", user.createdAt)
        .addField('**Current Server**', message.guild.name)
        .setFooter(`ID: ${user.id}`)
        .setThumbnail(user.displayAvatarURL())
        .setFooter(`Information about ${user.username}`)
        message.channel.send(userinfoembed);
        }
    },
};