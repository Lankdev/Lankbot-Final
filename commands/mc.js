const discord = require('discord.js');
const { bold } = require('ffmpeg-static');
const { botowner } = require('../config.json');
const fs = require('fs');

module.exports = {
    name: 'mc',
    description: 'Commands for LCSN Minecraft Servers',
    usage: '&mc [category]',
    group: 'owner',
    aliases: ['minecraft'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
    execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim){

        if(message.author.id != '550853476650057748'){
            return message.channel.send('This command is currently down.')
        }

        if(verifiedServers){
        if(message.member.roles.cache.has('783841040666198046')){
        if(!args[1]){
            const commandhelpembed = new discord.MessageEmbed()
            .setTitle('MC Commands Help')
            .setColor('#00BB00')
            .setDescription('Commands for the LCSN Minecraft Servers')
            .addFields(
                { name: 'Report', value: '&mc report [cat] [user] [report]' },
                { name: 'Whois', value: '&mc whois [discord mention or mc username]' },
            )
            .setFooter('Lankbot')
            message.channel.send(commandhelpembed)
        } else {

        const unknowncatembed = new discord.MessageEmbed()
        .setTitle('Unknown Category')
        .setDescription(`The '${args[1]}' category does not exist.`)
        .setColor('#FF0000')
        .setFooter('Lankbot');

        const unknowncatembed1 = new discord.MessageEmbed()
        .setTitle('Unknown Category')
        .setDescription(`The '${args[2]}' category does not exist.`)
        .setColor('#FF0000')
        .setFooter('Lankbot Help');

        if(args[1] === 'report'){
            if(!args[2]) {
                const noargs2forrepembed = new discord.MessageEmbed()
                .setTitle('MC Report Command')
                .setDescription('To report someone on the minecraft servers.')
                .addFields(
                    { name: 'Griefing', value: '&mc report griefing', inline: true },
                    { name: 'Stealing', value: '&mc report stealing', inline: true },
                    { name: 'Hacking', value: '&mc report hacking', inline: true },
                    { name: 'Exploits', value: '&mc report exploits', inline: true },
                    { name: 'Annoying', value: '&mc report annoying', inline: true },
                    { name: 'Other', value: '&mc report other', inline: true },
                )
                .setColor('#FF0000')
                .setFooter('Lankbot')
                message.channel.send(noargs2forrepembed)
            } else {

                let repargs = args.slice(4).join(" ");
                let target = message.mentions.users.first();

                if(target == null){
                    const repembed = new discord.MessageEmbed()
                    .setTitle('Report')
                    .setColor('#FF0000')
                    .setDescription(`Report By: ${message.author.id} / <@${message.author.id}>\nOffender: ${args[3]}`)
                    .addField(`Topic: ${args[2]}`, `Report: ${repargs}`)
                    .setFooter('Lankbot Report');

                    if(args[2] === 'griefing'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report griefing AccursedActor9 He was breaking my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'stealing'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report stealing AccursedActor9 He was taking things from my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'hacking'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report hacking AccursedActor9 He was flying")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'exploits'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report exploits AccursedActor9 He was duping")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'annoying'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report annoying AccursedActor9 He was hitting me in my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'other'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report other AccursedActor9 He build a butt lmao")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else {
                        message.channel.send(unknowncatembed1)
                    }

                } else {

                const repembed = new discord.MessageEmbed()
                    .setTitle('Report')
                    .setColor('#FF0000')
                    .setDescription(`Report By: ${message.author.id} / <@${message.author.id}>\nOffender: ${target.id} / ${args[3]}`)
                    .addField(`Topic: ${args[2]}`, `Report: ${repargs}`)
                    .setFooter('Lankbot Report');

                    if(args[2] === 'griefing'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report griefing AccursedActor9 He was breaking my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'stealing'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report stealing AccursedActor9 He was taking things from my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'hacking'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report hacking AccursedActor9 He was flying")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'exploits'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report exploits AccursedActor9 He was duping")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'annoying'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report annoying AccursedActor9 He was hitting me in my home")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else if(args[2] === 'other'){
                        if(!args[3]){
                            message.channel.send('You need to input a discord mention or xbox username into your command. (ex. "&mc report other AccursedActor9 He build a butt lmao")')
                        } else {
                            bot.channels.cache.get('783832730013794348').send(repembed)
                            message.channel.send('Your report has been submitted!')
                        }
                    } else {
                        message.channel.send(unknowncatembed1)
                    }
                }
            }
        } else if (args[1] === 'whois'){
            const noperson = new discord.MessageEmbed()
            .setTitle('No User Found')
            .setDescription('Please mention a user or say their xbox username in the command.\n**Usage: &mc whois [xbox or discord username]**')
            .setColor('#FF0000')
            .setFooter('Lankbot Help');
            if(!args[2]){
                return message.channel.send(noperson);
            }
            if(db.has(`${args[2]}`)){
                const personembed = new discord.MessageEmbed()
                .setTitle(`Who is ${args[2]}?`)
                .setDescription(`Aliases: **${db.get(`${args[2]}`)}**`)
                .setColor('#FFFF00')
                .setFooter('Lankbot MC')
                message.channel.send(personembed)
            } else {
                const personnotfound = new discord.MessageEmbed()
                .setTitle(`"${args[2]}" was not found`)
                .setDescription(`Make sure you capitalize correctly and spell it right.`)
                .setColor('#FF0000')
                message.channel.send(personnotfound)
            }


        } else if (args[1] === 'setuser'){
            if(message.author.id != botowner) return message.channel.send('This is an owner command.')
            if(!args[2] || !args[3]){
                return message.channel.send('Format: &mc setuser [xbox] [discord mention]')
            }
            db.set(`${args[2]}`, `${args[3]}`);
            db.set(`${args[3]}`, `${args[2]}`);

        } else if (args[1] === 'deluser'){
            if(message.author.id != botowner) return message.channel.send('This is an owner command.')
            if(!args[2] || !args[3]){
                return message.channel.send('Format: &mc deluser [xbox] [discord mention]')
            }
            if(db.has(`${args[2]}`)){
                db.delete(`${args[2]}`);
            }
            if(db.has(`${args[3]}`)){
                db.delete(`${args[3]}`);
            }
            
        } else if (args[1] === 'listusers'){
            if(message.author.id != botowner) return message.channel.send('This is an owner command.')
            fs.readFile('database.json', (err, data) => {
                if (err) { throw err; }
                const _msgs = JSON.stringify(JSON.parse(data), null, 2);
                message.channel.send('```json\n' + _msgs + '\n```');
            });

        } else {
            message.channel.send(unknowncatembed)
        }
    }
    } else {
        message.channel.send('This command is only for the members of the bedrock servers')
    }
    } else {
        message.channel.send('This is not a verified LCSN Server.')
    }
    },
}