const discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	usage: '&ping',
	group: 'info',
	cooldown: 20,
	aliases: ['latency'],
	guildOnly: false,
	exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
		message.channel.send("Pinging...").then(m =>{
			var ping = m.createdTimestamp - message.createdTimestamp;
			m.edit(`Ping: ${ping}ms`)
		});
    },
};