// Enjoy and feel free to use this code as you please! Make sure to check my Youtube channel for more tutoials - can be found on my profile - 
// Also make sure to change code for your bot

const discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const client = new discord.Client();
const ms = require("ms")

module.exports = {
	name: 'temp-mute',
	description: 'temp-mute',
	async execute(message) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let cmd = messageArray[0];

            if(message.member.hasPermission('MANAGE_MESSAGES')) {
                var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
                if(!member) return message.reply('Please Provide a Member to TempMute.')
    
      
                let role = message.guild.roles.cache.find(role => role.name === "Muted");
                
                if (!role) return message.reply("Couldn't find the 'muted' role.")
                if(member.roles.cache.find(r => r.name === "Muted")) return message.reply(`This member is currently muted`); 
                
                let time = args[1];
                if (!time) {
                    return message.reply("You didnt specify a time!");
                } 
                
 
                member.roles.add(role.id);
    
                message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)
              

                setTimeout( function () {
    
                    member.roles.remove(role.id);
                    message.channel.send(`@${member.user.tag} has been unmuted.`)
                }, ms(time));
    
            } else {
                return message.channel.send('You dont have perms.')
            }
	}
};

// If you have a main role / if its a privte bot use this code: 

//THIS IS THE CODE FOR THE COMMAND! FOR PEOPLE WHO USE COMMAND HANDLER,
GO AHEAD AND ONLY USE THE ARG SYSTEM AND THE CODE INSIDE OF THE if(cmd === '?tempmute'){ } THANKS!

const discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const client = new discord.Client();
const ms = require("ms")

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];

     if(cmd === '?tempmute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
