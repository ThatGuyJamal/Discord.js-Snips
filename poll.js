const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '?poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }

})



bot.login('TOKEN HERE!');

// If your using a command handler then remove what you dont need. 

// Usage: 

//#1 ?poll #<channnel name here> < What you want poll to say > 

//#2 (with command handler ) prefix + poll <ChannelName> < Poll to say> 
