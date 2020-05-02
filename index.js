const Discord = require('discord.js');
const{ prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {


    if(message.content.startsWith(`${prefix}kick`)){

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":eggplant: " + member.displayName + " has been ejected!")
        })
    }
})

client.login(token);