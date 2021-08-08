const discord = require('discord.js');

module.exports = {
	name: 'kick',
    description: 'Kicks a User',
    usage: '&kick [@user] [Reason]',
    group: 'moderation',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                .catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    },
};