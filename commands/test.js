module.exports = {
    name: 'test',
    description: 'testing commands',
    usage: '&test',
    group: 'owner',
    aliases: ['none'],
    guildOnly: false,
    cooldown: 5,
    exclusive: true,
    execute(message, args){
        /*
        message.delete({ timeout: 10, reason: 'Delete' })
        message.channel.send('*starting up reaction system*')
        .then(message => {
            setTimeout(function() {
                message.edit('test')
            }, 2000);
            setTimeout(function() {
                message.react('✔')
            }, 3000)
        })
        **/

    },
}