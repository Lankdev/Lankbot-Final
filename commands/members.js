const discord = require('discord.js')

module.exports = {
    name: 'members',
    description: 'members list command',
    usage: '&members',
    group: 'owner',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 5,
    exclusive: true,
    execute(message, args){/*
        let memberliswwt = message.guild.members.cache.map(member => `${member.id} - ${member.user.username}`).join("\n")
        let memberlist = message.guild.members.fetch().map(member => `${member.id} - ${member.user.usernmae}`).join('\n')**/
        const guild = '616747464862597128';
        message.guild.members.fetch()
            .then(console.log)
            .catch(console.error);
        /*
        const memberslistembed = new discord.MessageEmbed()
        .setTitle('Member List')
        .setDescription(memberlist)
        .setColor("0x0000FF")
        message.channel.send(memberslistembed)**/
    },
}