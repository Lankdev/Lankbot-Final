const discord = require('discord.js');
const querystring = require('querystring');

module.exports = {
    name: 'urban',
    description: 'Gets definition of a word or phrase from urban dictionary.',
    usage: '&urban [query]',
    group: 'fun',
    aliases: ['none'],
    guildOnly: false,
	cooldown: 5,
	exclusive: false,
    async execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if (!args[1]) {
			return message.channel.send('You need to supply a search term!');
		}

		let useargs = args.slice(1).join(" ");

		const query = querystring.stringify({ term: useargs });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (list == undefined) {
			return message.channel.send(`No results found for **${useargs}**.`);
		}

        const [answer] = list;

		const urbanembed = new discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
				{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
			);
		message.channel.send(urbanembed);
    },
}