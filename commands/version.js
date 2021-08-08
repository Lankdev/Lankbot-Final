const discord = require('discord.js');
const { version } = require('../config.json');

module.exports = {
	name: 'version',
    description: 'Displays Bot Version',
    usage: '&version',
    group: 'info',
    aliases: ['v'],
    cooldown: 5,
    guildOnly: false,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        const versionembedsoitworky = new discord.MessageEmbed()
        .setTitle('**Bot Version**')
        .setDescription(version)
        .setColor(`RANDOM`)
        message.channel.send(versionembedsoitworky);
    },
};