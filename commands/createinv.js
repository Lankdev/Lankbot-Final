const discord = require('discord.js');
const { botowner } = require('../config.json');

module.exports = {
	name: 'createinv',
    description: 'Creates a server invite',
    usage: '&createinv',
    group: 'owner',
    aliases: ['newinv'],
    guildOnly: true,
    cooldown: 5,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.author.id != botowner) return message.channel.send('This is an owner command.')
        let channel = message.channel
        channel.createInvite({unique: true}).then(invite => {
            const inviteembed = new discord.MessageEmbed()
            .setTitle('New Invite:')
            .setDescription(`https://discord.gg/${invite.code}`)
            .setColor('0xFF0000')
            .setFooter('Lankbot')
            message.channel.send(inviteembed)
        })
    },
};