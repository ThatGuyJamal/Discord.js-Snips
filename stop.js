const { MessageEmbed } = require("discord.js");
const sendError = require('../../util/error')

const commando = require('discord.js-commando');
module.exports = class StopCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            aliases: ['end'],
            memberName: 'stop-muisc',
            description: 'To stop the music and clearing the queue',
            userPermissions: [
                'MUTE_MEMBERS'
            ],
            argsType: 'multiple',
            guildOnly: true, 
            throttling: {
                usages: 1,
                duration: 120,
            },
        })
    }
    async run ( message, args ) {
        const channel = message.member.voice.channel
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could stop for you.", message.channel);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop the music");
    message.react("✅")
    }
}