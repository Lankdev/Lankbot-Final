const discord = require('discord.js');
const bot = new discord.Client();
const ytdl = require("ytdl-core");
const ms = require('ms');
const config = require('./config.json');
const botbanned = [];
const lankbotadmins = ['550853476650057748'];
const listvs = ['616747464862597128', '691318118961774752'];
const fs = require('fs');
const { prefix, token, botowner } = require('./config.json');
const querystring = require('querystring');
const fetch = require('node-fetch');
const urban = require('urban');
const JSONdb = require('simple-json-db');
const db = new JSONdb('database.json');
bot.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
var colors = require('colors');

//Command Files Loop
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
    console.log(colors.underline.blue(command.name) + colors.blue(' was loaded.'))
}

//Commands
bot.on('message', async message =>{

    if(message.author.id == '673571065280069680') return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const args1 = message.content.substring(prefix.length).split(" ");

    try{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //If banned from using the bot then stop
    var bannedfrombot = false;
    botbanned.forEach(id => {
        if(message.author.id == id)
        bannedfrombot = true;
    });

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
    

    //Checks if a command was send
    if(command === 'apps'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('apps').execute(message, args1, bot, verifiedServers);

    } else if (command === 'avatar') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('avatar').execute(message, args1);

    } else if (command === 'ban') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('ban').execute(message, args1);

    } else if (command === 'botstat') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('botstat').execute(message, args1, bot);

    } else if (command === 'clear'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('clear').execute(message, args1);

    } else if (command === 'createinv'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('createinv').execute(message, args1);

    } else if (command === 'delchannel'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('delchannel').execute(message, args1);

    } else if (command === 'deluser'){         //FIX
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        //bot.commands.get('deluser').execute(message, args1);
        message.channel.send('Command is currently down, We are working on it.')

    } else if (command === 'dmall'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('dmall').execute(message, args1, bot);

    } else if (command === 'gl'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('gl').execute(message, args1, bot);

    } else if (command === 'help'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('help').execute(message, args1);

    } else if (command === 'invitelink'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('invitelink').execute(message, args1);

    } else if (command === 'kick'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('kick').execute(message, args1);

    } else if (command === 'math'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('math').execute(message, args1);

    } else if (command === 'mc'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('mc').execute(message, args1, bot, verifiedServers, db);

    } else if (command === 'msgchannel'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('msgchannel').execute(message, args1, lbadmin, bot);

    } else if (command === 'msgmember'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('msgmember').execute(message, args1, lbadmin, bot);

    } else if (command === 'ping'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('ping').execute(message, args1);

    } else if (command === 'play'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('play').execute(message, args1, ytdl);

    } else if (command === 'poll'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('poll').execute(message, args1);

    } else if (command === 'r'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('r').execute(message, args1);

    } else if (command === 'reload') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('reload').execute(message, args);

    } else if (command === 'report'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('report').execute(message, args1, bot);

    } else if (command === 'rndcat'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('rndcat').execute(message, args, fetch);

    } else if (command === 'roles'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('roles').execute(message, args1);

    } else if (command === 'say'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('say').execute(message, args1);

    } else if (command === 'serverinfo') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('serverinfo').execute(message, args1);

    } else if (command === 'setact'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('setact').execute(message, args1, bot);

    } else if (command === 'stop'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('stop').execute(message, args1);

    } else if (command === 'support'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('support').execute(message, args1);

    } else if (command === 'ts'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('ts').execute(message, args1);

    } else if (command === 'udran'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('udran').execute(message, args1, urban, trim);

    } else if (command === 'uptime'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('uptime').execute(message, args1, bot);

    } else if (command === 'urban') {
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');

        if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
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
        
	} else if (command === 'user-info'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('user-info').execute(message, args1);

    } else if (command === 'version'){
        if(bannedfrombot) return message.channel.send('You are banned from this bot.');
        bot.commands.get('version').execute(message, args1);

    }

} catch (err) {
    console.log(`Command Error: ${err}`.red)
    message.channel.send('There was an error, Lankbot developers have been notified!')
    bot.channels.cache.get('714498079658606612').send(`\`\`\` ${err} \`\`\``)

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

    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`.yellow);
    bot.user.setPresence({ game: { name: `&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });

    } catch (err) {
        catchErr(err, message);
        console.log('ERROR in the \"Event when the bot joins a server\" section!'.red)
        message.channel.send('Command ERROR, The DEVS of the bot have been notified of the error!')
    }
});

//Event when the bot leaves a server
bot.on("guildDelete", guild => {

    try{

    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`.yellow);
    bot.user.setPresence({ game: { name: `&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!` }, status: 'online' });
    bot.user.setActivity(`&help | ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members!`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });

    } catch (err) {
        catchErr(err, message);
        console.log('ERROR in the \"Event when the bot leaves a server\" section!'.red)
        message.channel.send('Command ERROR, The DEVS of the bot have been notified of the error!')
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

bot.login(token)