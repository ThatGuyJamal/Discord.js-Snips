// I make this code so you can restart your bot without needed to go into the console. enjoy and use as you please. 
// Note: This command formate is used in a command handler, make sure to change it to your needs. (Just do a client/bot.on)

module.exports = {
	name: 'restart',
	description: 'restart',
	async execute(message, args) {
        if (message.author.id !== 'YOUR ID HERE') {
            return message.channel.send(`Only the bot Dev can use this command! `)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
         }
};

// owner id : 'YOUR ID HERE' - NAME: ''
