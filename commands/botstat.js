const discord = require("discord.js");
const os = require('os');
const cpuStat = require("cpu-stat");

module.exports = {
    name: 'botstat',
    description: 'Bot Information',
    usage: '&botstat',
    group: 'info',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 20,
    exclusive: false,
	execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
        let { version } = require("discord.js");
        cpuStat.usagePercent(function(err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

            let secs = Math.floor(bot.uptime % 60);
            let days = Math.floor((bot.uptime % 31536000) / 86400);
            let hours = Math.floor((bot.uptime / 3600) % 24);
            let mins = Math.floor((bot.uptime / 60) % 60);

            let embedStats = new discord.MessageEmbed()
                .setTitle("*** Stats ***")
                .setColor("#00ff00")
                .addField("**• Mem Usage**", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("**• Uptime** ", `${hours}h ${mins}m`, true)
                .addField("**• Users**", `${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
                .addField("**• Servers**", `${bot.guilds.cache.size}`, true)
                .addField("**• Channels** ", `${bot.channels.cache.size}`, true)
                .addField("**• Discord.js**", `v${version}`, true)
                .addField("**• Node**", `${process.version}`, true)
                .addField("**• CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("**• CPU usage**", `\`${percent.toFixed(2)}%\``,true)
                .addField("**• Arch**", `\`${os.arch()}\``,true)
                .addField("**• Platform**", `\`\`${os.platform()}\`\``,true)
                .setFooter("Lankbot")

            message.channel.send(embedStats)
        })

    },
}