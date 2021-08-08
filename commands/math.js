const discord = require('discord.js');

module.exports = {
	name: 'math',
    description: 'Does Math',
    usage: '&math [num] [+, -, *, /] [num]',
    group: 'ect',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(args[2] === '+'){
            var mathadd1 = parseInt(args[1])
            var mathadd2 = parseInt(args[3])
            message.channel.send(Math.floor(mathadd1 + mathadd2))
        };

        if(args[2] === '*'){
            var mathmul1 = parseInt(args[1])
            var mathmul2 = parseInt(args[3])
            message.channel.send(Math.floor(mathmul1 * mathmul2))
        };

        if(args[2] === '/'){
            var mathdiv1 = parseInt(args[1])
            var mathdiv2 = parseInt(args[3])
            message.channel.send(Math.floor(mathdiv1 / mathdiv2))
        };

        if(args[2] === '-'){
            var mathsub1 = parseInt(args[1])
            var mathsub2 = parseInt(args[3])
            message.channel.send(Math.floor(mathsub1 - mathsub2))
        };
    },
};