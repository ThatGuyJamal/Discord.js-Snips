const client = require('discord.js')

const commando = require('discord.js-commando');
module.exports = class LOopCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'loop',
            group: 'music',
            memberName: 'muisc-loop',
            description: 'Loops the currently Playing song.',
            userPermissions: [
                'CONNECT'
            ],
            clientPermissions: [
                'SPEAK'
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
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.reply("There is nothing playing.").catch(console.error);
    
        // toggle from false to true and reverse
        serverQueue.loop = !serverQueue.loop;
        return serverQueue.textChannel.send(`Loop is now ${serverQueue.loop ? "**on**" : "**off**"}`).catch(console.error);
    }
}