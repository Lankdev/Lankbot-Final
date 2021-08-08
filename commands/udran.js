const discord = require('discord.js');

module.exports = {
    name: 'udran',
    description: 'Random word and definition from Urban Dictionary.',
    usage: '&udran',
    group: 'fun',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
    execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim){
        urban.random().first(function(json) {
            const ranembed = new discord.MessageEmbed()
            .setTitle(json.word)
            .setColor('EFFF00')
            .setURL(json.permalink)
            .addFields(
                { name: 'Definition', value: trim(json.definition, 1024) },
				{ name: 'Example', value: trim(json.example, 1024) },
				{ name: 'Rating', value: `${json.thumbs_up} thumbs up. ${json.thumbs_down} thumbs down.` },
            )
            message.channel.send(ranembed)
        });
    },
}