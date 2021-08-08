const discord = require('discord.js');
const { botowner } = require('../config.json');

module.exports = {
	name: 'reload',
    description: 'Reloads a command',
	usage: '&reload [command]',
	group: 'owner',
	aliases: ['load'],
	guildOnly: false,
	cooldown: 5,
	exclusive: true,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        if(message.author.id != botowner) return message.channel.send('This is an owner command.');
        if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
		const commandName = args[1].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`.`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`.`);
		}
	},
};