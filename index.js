const Discord = require('discord.js');
const{ prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}hello`)){
        message.channel.send("Hello my love")
    }
})

client.login(token);