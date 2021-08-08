const discord = require('discord.js')

module.exports = {
    name: 'channels',
    description: 'chanenls list',
    usage: '&channels',
    group: 'owner',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 5,
    exclusive: true,
    execute(message, args){
        let channellist = message.guild.channels.cache.filter(channel => channel.position).map(channel => `${channel.type} - ${channel.name}`).join("\n")
        const channelslistembed = new discord.MessageEmbed()
        .setTitle('Channel List')
        .setDescription(channellist)
        .setColor("0x0000FF")
        message.channel.send(channelslistembed)
    },
}