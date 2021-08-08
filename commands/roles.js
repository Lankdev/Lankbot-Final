const discord = require('discord.js');

module.exports = {
	name: 'roles',
    description: 'List Guild Roles',
    usage: '&roles',
    group: 'info',
    aliases: ['rolelist'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        let rolelist = message.guild.roles.cache.filter(role => role.position).map(role => role.name).join("\n")
        const rolelistembed = new discord.MessageEmbed()
        .setTitle('Role List')
        .setDescription(rolelist)
        .setColor("0x0000FF")
        message.channel.send(rolelistembed)
    },
};