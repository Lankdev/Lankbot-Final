const discord = require('discord.js');
const { botowner } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Lankbot Help',
    usage: '&help [cat or command]',
    group: 'info',
    aliases: ['?'],
    guildOnly: false,
    cooldown: 5,
    exclusive: false,
    execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim){
        if(!args[1]){
            if(message.channel.type === 'dm'){
                const helpembed = new discord.MessageEmbed()
                .setTitle('Categories:')
				.setDescription(`**Do "&help [command or category]" to get help about it!**`)
                .addFields(
                    {name: '**Information**', value: '&help info', inline: true},
                    {name: '**Moderation**', value: '&help mod', inline: true},
                    {name: '**Fun**', value: '&help fun', inline: true},
                    {name: '**Ect**', value: '&help ect', inline: true},
                    {name: '**Full List**', value: '&help list', inline: true},
                )
				.setColor('#FF0000')
				.setFooter('Lankbot Help')
                message.channel.send(helpembed)
            } else if(message.guild.id === '616747464862597128' /**LCSN exclusive*/){
                const helpembed = new discord.MessageEmbed()
                .setTitle('Categories: (LCSN)')
				.setDescription(`**Do "&help [command or category]" to get help about it!**`)
                .addFields(
                    {name: '**LCSN**', value: '&help lcsn', inline: true},
                    {name: '**Information**', value: '&help info', inline: true},
                    {name: '**Moderation**', value: '&help mod', inline: true},
                    {name: '**Fun**', value: '&help fun', inline: true},
                    {name: '**Ect**', value: '&help ect', inline: true},
                    {name: '**Full List**', value: '&help list', inline: true},
                )
				.setColor('#FF0000')
				.setFooter('Lankbot Help')
                message.channel.send(helpembed)

            } else if(message.guild.id === '783148709327536198'/**Wisconson roleplay exclusive*/){
                const helpembed = new discord.MessageEmbed()
                .setTitle('Categories: (WSP)')
				.setDescription(`**Do "&help [command or category]" to get help about it!**`)
                .addFields(
                    {name: '**WSP**', value: '&help wsp', inline: true},
                    {name: '**Information**', value: '&help info', inline: true},
                    {name: '**Moderation**', value: '&help mod', inline: true},
                    {name: '**Fun**', value: '&help fun', inline: true},
                    {name: '**Ect**', value: '&help ect', inline: true},
                    {name: '**Full List**', value: '&help list', inline: true},
                )
				.setColor('#FF0000')
				.setFooter('Lankbot Help')
                message.channel.send(helpembed)
                
            } else {
                const helpembed = new discord.MessageEmbed()
                .setTitle('Categories:')
				.setDescription(`**Do "&help [command or category]" to get help about it!**`)
                .addFields(
                    {name: '**Information**', value: '&help info', inline: true},
                    {name: '**Moderation**', value: '&help mod', inline: true},
                    {name: '**Fun**', value: '&help fun', inline: true},
                    {name: '**Ect**', value: '&help ect', inline: true},
                    {name: '**Full List**', value: '&help list', inline: true},
                )
				.setColor('#FF0000')
				.setFooter('Lankbot Help')
                message.channel.send('I\'ve DMed you a message!')
                message.author.send(helpembed)
            }
        } else {
            const { commands } = message.client;
            var arg1low = args[1].toLowerCase();
            const name1 = args[1];
            const command1 = commands.get(name1) || commands.find(c => c.aliases && c.aliases.includes(name1));

            if(arg1low === 'info'){
                const cmds = (commands.filter(command => command.group === 'info')).map(command => `**&${command.name} - ${command.description}**`)
                const infoembed = new discord.MessageEmbed()
                .setTitle('Informational Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(infoembed)
            } else if(arg1low === 'mod'){
                const cmds = (commands.filter(command => command.group === 'moderation')).map(command => `**&${command.name} - ${command.description}**`)
                const modembed = new discord.MessageEmbed()
                .setTitle('Moderational Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(modembed)
            } else if(arg1low === 'lcsn'){
                if(message.channel.type === 'dm') return message.channel.send('This command is only for use in the Official LCSN Server.')
                if(message.guild.id != '616747464862597128') return message.channel.send('This command is only for use in the Official LCSN Server.')
                const cmds = (commands.filter(command => command.group === 'lcsn')).map(command => `**&${command.name} - ${command.description}**`)
                const modembed = new discord.MessageEmbed()
                .setTitle('LCSN Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(modembed)
            } else if(arg1low === 'wsp'){
                if(message.channel.type === 'dm') return message.channel.send('This command is only for use in The Wisconsin State Patrol RP [Private] Server.')
                if(message.guild.id != '783148709327536198') return message.channel.send('This command is only for use in The Wisconsin State Patrol RP [Private] Server.')
                const cmds = (commands.filter(command => command.group === 'wsp')).map(command => `**&${command.name} - ${command.description}**`)
                const modembed = new discord.MessageEmbed()
                .setTitle('WSP Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(modembed)
            } else if(arg1low === 'ect'){
                const cmds = (commands.filter(command => command.group === 'ect')).map(command => `**&${command.name} - ${command.description}**`)
                const ectembed = new discord.MessageEmbed()
                .setTitle('Ect Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(ectembed)
            } else if(arg1low === 'list'){
                if(!args[2]){
                    const cmds = commands.filter(command => command.exclusive != true).map(command => `**&${command.name} - ${command.description}**\n`)
                    const listembed = new discord.MessageEmbed()
                    .setTitle('All Commands')
                    .setDescription(cmds)
                    .setColor('#FF0000')
                    .setFooter('Lankbot Help')
                    message.channel.send(listembed)
                } else if(args[2] == '/a'){
                    const cmds = commands.map(command => `**&${command.name} - ${command.description}**\n`)
                    const listembed = new discord.MessageEmbed()
                    .setTitle('All Commands')
                    .setDescription(cmds)
                    .setColor('#FF0000')
                    .setFooter('Lankbot Help')
                    message.channel.send(listembed)
                } else {
                    const cmds = commands.filter(command => command.exclusive != true).map(command => `**&${command.name} - ${command.description}**\n`)
                    const listembed = new discord.MessageEmbed()
                    .setTitle('All Commands')
                    .setDescription(cmds)
                    .setColor('#FF0000')
                    .setFooter('Lankbot Help')
                    message.channel.send(listembed)
                }
            } else if(arg1low === 'owner'){
                if(message.author.id != botowner) return message.channel.send('This is an owner command.')
                const cmds = (commands.filter(command => command.group === 'owner')).map(command => `**&${command.name} - ${command.description}**`)
                const ownerembed = new discord.MessageEmbed()
                .setTitle('Owner Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(ownerembed)
            } else if(arg1low === 'fun'){
                const cmds = (commands.filter(command => command.group === 'fun')).map(command => `**&${command.name} - ${command.description}**`)
                const ownerembed = new discord.MessageEmbed()
                .setTitle('Fun Commands')
                .setDescription(cmds)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(ownerembed)
            } else if(arg1low = command1){
                const commandembed = new discord.MessageEmbed()
                .setTitle(`Information about the \"${command1.name}\" command:`)
                .setDescription(`**Name:** ${command1.name}\n**Description:** ${command1.description}\n**Usage: **${command1.usage}\n**Group:** ${command1.group}\n**Aliases:** ${command1.aliases.join(', ')}\n**Cooldown:** ${command1.cooldown}s\n**Guild Only: **${command1.guildOnly}`)
                .setColor('#FF0000')
                .setFooter('Lankbot Help')
                message.channel.send(commandembed)
            } else {
                message.channel.send('That is not a category or command name. Try \"&help\"')
            }
        }
    },
}