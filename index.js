const Discord = require('discord.js');
const{ prefix, token} = require('./config.json');
const client = new Discord.Client(); //Creating new user

client.once('ready', () => {
    console.log('Ready!')
    client.user.setActivity('Gummo - 6ix9ine', {type: 'LISTENING'}).catch(console.error); //Activity of Bot in sidebar changed to Listening to a song
})

client.on('message', message => { //MESSAGE COMMANDS

    if(message.content === "hello"){ //Basic hello greeting whenever someone says hi
        message.reply("Greetings my love :heart_eyes: ");
    }

    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) { //Only admins and moderators have the ability to kick members

    
            if(message.content.startsWith(`${prefix}kick`)){ //bot has the ability to kick users when !kick is used

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":eggplant: " + member.displayName + " has been ejected!") //Kick message is displayed
            })
        }
    }

})

client.login(token);