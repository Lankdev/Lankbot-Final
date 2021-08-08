const fs = require('fs');
const discord = require('discord.js');
const bot = new discord.Client();
const ytdl = require("ytdl-core");
const ms = require('ms');
const botbanned = [];
const lankbotadmins = ['550853476650057748'];
const listvs = ['616747464862597128', '691318118961774752'];
const { prefix, token, botowner } = require('./config.json');
const querystring = require('querystring');
const fetch = require('node-fetch');
const urban = require('urban');
const JSONdb = require('simple-json-db');
const db = new JSONdb('database.json');
const verifDB = new JSONdb('verifiedserver.json');
bot.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
var colors = require('colors');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
	console.log(colors.underline.blue(command.name) + colors.blue(' was loaded.'))
}

const cooldowns = new discord.Collection();

//Bot Startup
bot.on('ready', () =>{
    var x = bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    console.log('lankbot is online!'.green);

    bot.user.setPresence({ game: { name: `&help | ${x} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${x} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });
});

//Commands
bot.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const args1 = message.content.substring(prefix.length).split(" ");

	//If banned from using the bot then stop
    var bannedfrombot = false;
    botbanned.forEach(id => {
        if(message.author.id == id)
        bannedfrombot = true;
	});
	
	if(bannedfrombot) return message.channel.send('You are banned from using this bot.')

    //If lankbot admin then put in string
    var lbadmin = false;
    lankbotadmins.forEach(id => {
        if(message.author.id == id)
        lbadmin = true;
    });

    //If server = to verified lcsn server
    var verifiedServers = false;
    listvs.forEach(id =>{
        if(message.channel.type === 'dm') return;
        if(message.guild.id == id)
        verifiedServers = true;
    })

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('This command is not for DMs.');
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Wait ${timeLeft.toFixed(1)} more second(s) before using the \`${command.name}\` command again.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args1, bot, verifiedServers, db, lbadmin, ytdl, fetch, urban, trim, verifDB);
	} catch (error) {
		console.error(`${error}`.red);
		message.reply('there was an error trying to execute that command!');
	}
});

//eval function
function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
};

//Eval Command
bot.on('message', message=>{
    const args = message.content.split(" ").slice(1);

    if (message.content.startsWith(prefix + "eval")) {
        if(message.author.id !== botowner) return;

        try {

            const code = args.join(" ");
            let evaled = eval(code);
            console.log(`Eval used. Executed: ${code}`.underline.red)

            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"xl"});

        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
});

//Event when the bot joins a server
bot.on("guildCreate", guild => {

    try{

    const joinEmbed = new discord.MessageEmbed()
    .setTitle('Joined a server')
    .setDescription(`**Name: ${guild.name}\nId: ${guild.id}\nMembers: ${guild.memberCount}\nChannels: ${guild.channels.cache.size}**`)
    .setColor('#FFFF00');

    bot.user.setPresence({ game: { name: `&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });

    bot.channels.cache.get('756893613459374080').send(joinEmbed)

    } catch (err) {
        console.log('ERROR in the \"Event when the bot joins a server\" section!'.red)
        console.log((err).red)
    }
});

//Event when the bot leaves a server
bot.on("guildDelete", guild => {

    try{

    const leftEmbed = new discord.MessageEmbed()
    .setTitle('Left a server')
    .setDescription(`**Name: ${guild.name}\nId: ${guild.id}\nMembers: ${guild.memberCount}**`)
    .setColor('#FFFF00');

    bot.user.setPresence({ game: { name: `&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });

    bot.channels.cache.get('756893613459374080').send(leftEmbed)

    } catch (err) {
        console.log('ERROR in the \"Event when the bot leaves a server\" section!'.red)
        console.log(err.red)
    }
});

//constant refresh
bot.on('message', message=>{
    try{
    
    if(message.author.id === '673571065280069680') return;

    if(message.content === '<@!673571065280069680>' || message.content === '<@673571065280069680'){
        const helpname = '&help'
        const mentionembed = new discord.MessageEmbed()
        .setColor('0xFF0000')
        .setTitle('To use this bot:')
        .addField(`**Prefix:**`, `${prefix}`)
        .addField('**For Help:**', `${helpname}`)
        .setFooter('Lankbot')
        message.channel.send(mentionembed)
    }

} catch (err) {
    catchErr(err, message);
    console.log('ERROR in the \"Constant Refresh\" section!'.red)
    message.channel.send('Command ERROR, The DEVS of the bot have been notified of the error!')
}
});

setInterval(setAct, 300000)
function setAct() {
    var x = bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    bot.user.setPresence({ game: { name: `&help | ${x} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${x} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });
};

bot.login(token);