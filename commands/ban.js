const discord = require('discord.js');

module.exports = {
	name: 'ban',
    description: 'Bans a user',
    usage: '&ban [@user] [Reason]',
    group: 'moderation',
    aliases: ['none'],
    guildOnly: true,
    cooldown: 5,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This is an Administrator Command!')
        if(!args[2]) return message.channel.send('Provide a reason! Format: &ban {user} {reason}')
        let thereason = args.slice(2).join(" ")
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .ban({
                        reason: `${thereason} by: ${message.author}`,
                    })
                    .then(() => {
                        message.reply(`Successfully banned ${user.tag}`);
                    })
                .catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to ban!");
        }
    },
};