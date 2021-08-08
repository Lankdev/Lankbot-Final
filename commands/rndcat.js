module.exports = {
    name: "rndcat",
    description: "Sends random cat image.",
    usage: "&rndcat",
    group: "ect",
    guildOnly: false,
    aliases: ['cat'],
    cooldown: 3,
    exclusive: false,
    async execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
	    message.channel.send(file);
    }
}