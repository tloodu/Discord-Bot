const Discord = require('discord.js');
const{ prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {

    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

    
            if(message.content.startsWith(`${prefix}kick`)){

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":eggplant: " + member.displayName + " has been ejected!")
            })
        }
    }

    if(message.content.startsWith(`${prefix}hello`)){
        message.channel.send("Hello my love, :heart_eyes: ")
    }
})

client.login(token);