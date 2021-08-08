const discord = require("discord.js")

module.exports = {
  name: 'apps',
  description: 'Exclusive Applications',
  usage: '&apps [cat]',
  group: 'lcsn',
  aliases: ['applications', 'forms'],
  guildOnly: false,
  cooldown: 10,
  exclusive: true,
  async execute(message, args, bot, verifiedServers, db, lbadmins, ytdl, fetch, urban, trim) {
    if(verifiedServers){
    if(!args[1]){
      const noargshelpem = new discord.MessageEmbed()
      .setColor('#FFFF00')
      .setTitle('Applications')
      .addFields(
        {name: 'Staff', value: '&apps staff', inline: true},
      )
      .setDescription('General Applications for LCSN')
      .setFooter('LCSN Apps')
      message.channel.send(noargshelpem)
    } else if(args[1] === 'staff'){
      if(!args[2]){
        const staffappembed = new discord.MessageEmbed()
        .setTitle('LCSN Staff Application')
        .setDescription('Application to apply for staff on the Official LCSN Server.')
        .setFooter('LCSN Staff App')
        .addFields(
          {name: 'Terms', value: '&apps staff terms', inline: true},
          {name: 'Start', value: '&apps staff start', inline: true},
          {name: 'Help', value: '&apps staff help', inline: true},
        )
        .setColor('#FFFF00')
        message.channel.send(staffappembed)
      } else if(args[2] === 'terms'){
        message.channel.send('I\'ve sent you a DM including the LCSN Staff Application Terms.')
        const stafftermsem = new discord.MessageEmbed()
        .setTitle('LCSN Staff Application Terms')
        .setDescription('1. You must be at least 13 years of age.\n2. You must be online at least one hour a week.\n3. You must respect members and other staff.\n4. You must know the basic premise of being staff.\n5. You must have been a member of the server for a month before applying.\n6. You must not send fake application of any kind.\n7. You must answer the questions to the best of your ability.\n\n**Failure to comply with these terms will result in a punishment on the server.**')
        .setColor('#FFFF00')
        .setFooter('LCSN Staff Apps')
        message.author.send(stafftermsem)
      } else if(args[2] === 'start'){
        let filter = m => m.author.id === message.author.id
        const loc = await message.author.send(`staff-${message.author.id}`)
        if(message.channel.type === 'dm'){} else {
          message.delete({ timeout: 500, reason: 'To clear bot-lag of spammed admin commands.'})
        }
        message.author.send('Are you sure you want to start your application? (yes or no)').then(() => {
          loc.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
          .then(message => {
            message = message.first()
            if(message.content.toLowerCase() == 'yes' || message.content.toLowerCase() == 'y'){
              message.channel.send('Application Starting, Please Wait.')
              var xx = bot.guilds.cache.get('691318118961774752').channels.cache.find(channel => channel.name === `staffapp-${message.author.id}`);
              if(xx){
                message.channel.send('You already have a pending application.')
              } else {
                bot.guilds.cache.get('691318118961774752').channels.create(`staffapp-${message.author.id}`, 'text')
                .then(channel => {
                  const cat = '786060168403222528'
                  channel.setParent(cat)
                })
              message.channel.send('How old are you?').then(() =>{
                message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                .then(message => {
                  message = message.first() //Test staff app, make it so staff can accept and deny apps with a reason, fix formatting witht he questons.
                  var message1 = message;
                  message.channel.send('What is your birthday? (Optional)').then(() =>{
                    message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                    .then(message => {
                      message = message.first()
                      var message2 = message;
                      message.channel.send('What is your IRL Name?').then(() =>{
                        message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                        .then(message => {
                          message = message.first()
                          var message3 = message;
                          message.channel.send('What is your Email? (Optional)').then(() =>{
                            message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                            .then(message => {
                              message = message.first()
                              var message4 = message;
                              message.channel.send('Why do you want to be staff?').then(() =>{
                                message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                                .then(message => {
                                  message = message.first()
                                  var message5 = message;
                                  message.channel.send('What can you do that not many people can?').then(() =>{
                                    message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                                    .then(message => {
                                      message = message.first()
                                      var message6 = message;
                                      message.channel.send('Why would we choose you over someone else?').then(() =>{
                                        message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                                        .then(message => {
                                          message = message.first()
                                          var message7 = message;
                                          message.channel.send('What experience do you have being staff?').then(() =>{
                                            message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                                            .then(message => {
                                              message = message.first()
                                              var message8 = message;
                                              message.channel.send('What is your gender?').then(() =>{
                                                message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
                                                .then(message => {
                                                  message = message.first()
                                                  var message9 = message;
                                                  message.channel.send('Your app has been submitted.')
                                                  const appembed = new discord.MessageEmbed()
                                                  .setTitle(`Staff App - ${message.author.username} - ${message.author.id}`)
                                                  .setDescription(`1. **How old are you?** - ${message1}\n2. **What is your birthday?*** - ${message2}\n3. **What is your IRL Name?** - ${message3}\n4. **What is your Email?*** - ${message4}\n5. **Why do you want to be staff?** - ${message5}\n6. **What can you do that not many people can?** - ${message6}\n7. **Why would we choose you over someone else?** - ${message7}\n8. **What experience do you have being staff?** - ${message8}\n9. **What is your gender?** - ${message9}`)
                                                  .setColor('#FFFF00')
                                                  bot.channels.cache.get(bot.guilds.cache.get('691318118961774752').channels.cache.find(channel => channel.name === `staffapp-${message.author.id}`).id).send(appembed)
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }
            } else if(message.content.toLowerCase() == 'no' || message.content.toLowerCase() == 'n'){
              message.author.send('Application Cancelled')
            } else {
              message.author.send('Invalid Response')
            }
          })
        })
      } else if(args[2] === 'help'){
        const helpembed = new discord.MessageEmbed()
        .setTitle('LCSN Staff App Help')
        .setDescription(`**Application Terms:**\n1. You must be at least 13 years of age.\n2. You must be online at least one hour a week.\n3. You must respect members and other staff.\n4. You must know the basic premise of being staff.\n5. You must have been a member of the server for a month before applying.\n6. You must not send fake application of any kind.\n7. You must answer the questions to the best of your ability.\n*Failure to comply with these terms will result in a punishment on the server.*\n\n**Commands:**\n &apps staff start - Starts the staff application.\n&apps staff terms - Displays LCSN staff app terms.\n&apps staff help - Displays information about the LCSN Staff Application.\n\n**Infomation:**\n1. Your application can take up to a week to be accepted or denied (more than likely will be answered in a few hours).\n2. If you ask an LCSN staff member to read your app, It will more than likely be denied.`)
        .setFooter('LCSN Apps')
        .setColor('#3300CC')
        message.channel.send(helpembed)
      } else if(args[2] === 'accept'){
        if(message.guild.id === '691318118961774752'){
          var xc = message.channel.name
          var str = xc.substring(9)
          if(isNaN(str)){
            message.channel.send('Error, This is not a valid channel for that.')
          } else {
            bot.channels.cache.get('786444955459518535').send(`<@${str}>, You have been accepted as staff. We will talk to you soon.`)
          }
        } else {

        }
      } else if(args[2] === 'deny'){
        if(message.guild.id === '691318118961774752'){
          var xc = message.channel.name
          var str = xc.substring(9)
          if(isNaN(str)){
            message.channel.send('Error, This is not a valid channel for that.')
          } else {
            await bot.channels.cache.get('786444955459518535').send(`<@${str}>, You have been declined as staff. If you have questions, dm <@550853476650057748>.`)
            await message.channel.delete()
          }
        } else {
          
        }
      } else {
        message.channel.send(`"${args[2]}" is an unknown subcategory. If you need help, please do "&apps staff help".`)
      }
    } else {
      message.channel.send(`"${args[1]}" is an unknown subcategory. If you need help, please do "&apps".`)
    }
  } else {
    message.channel.send('This is not a verified LCSN Server.')
  }
  },
}