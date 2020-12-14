const commando = require('discord.js-commando');
const { MessageEmbed } = require("discord.js");
module.exports = class Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            aliases: ['hold'],
            group: 'music',
            memberName: 'pause-music',
            description: 'Pauses the currently playing song.',
            clientPermissions: [
                'SPEAK'
            ],
            argsType: 'multiple',
            guildOnly: true, 
            throttling: {
                usages: 3,
                duration: 30,
            },
        })
    }
    async run ( message, args ) {
        const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      let xd = new MessageEmbed()
      .setDescription("⏸ Paused the music for you!")
      .setColor("YELLOW")
      .setAuthor("Music has been paused!", "https://github.com/ThatGuyJamal/DeepWebAPI-Git-host/blob/master/src/assets/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
    }
}