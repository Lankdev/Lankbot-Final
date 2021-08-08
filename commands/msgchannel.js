const discord = require('discord.js');

module.exports = {
	name: 'msgchannel',
    description: 'msgs a channel',
    usage: '&msgchannel [channel id] [message]',
    group: 'owner',
    aliases: ['msgch'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(!lbadmins) return message.channel.send('This is a Lankbot Administrator Command!')
        let channelmsgmessage = args.slice(2).join(" ");    
        let msgchannelchannel = args[1]
        let msgchannelauthour = message.author
        message.delete({ timeout: 500, reason: 'It had to be done.' })
        bot.channels.cache.get(msgchannelchannel).send(channelmsgmessage)
        bot.users.cache.get("550853476650057748").send(msgchannelauthour + `${msgchannelauthour} Used the MSGCHANNEL command! They used it in the channel (${msgchannelchannel}) and said *"${channelmsgmessage}"*`)
    },
};