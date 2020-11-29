const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var sentences = [
        "https://media.discordapp.net/attachments/770574971818344448/782399042981724221/unknown.png"
        //"https://media.discordapp.net/attachments/770574971818344448/782377489464295484/unknown.png",
        //"https://media.discordapp.net/attachments/770574971818344448/782398767826599997/unknown.png",
        //"https://media.discordapp.net/attachments/770574971818344448/782398900195033119/unknown.png"
    ];
    var type = sentences[Math.floor(Math.random() * sentences.length)];

    var min = 5, max = 10;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);

    message.channel.send("Typeracer will start in 1-10 seconds, be ready!").then(d => d.delete({timeout: 15000}));

      setTimeout(() => {
        message.channel.send(`**This message will delete in 30 seconds!**\nFirst who types "${type}" wins!\n*This message was sent in ${rand} seconds!*`).then(d => d.delete({timeout: 30000}));
      }, rand * 1000);

       // Array 1
       if(type === "https://media.discordapp.net/attachments/770574971818344448/782399042981724221/unknown.png") {
        message.channel.awaitMessages({max: 1, time: 30000}).then(collected => {
                  if(collected.first().content.toLowerCase() == 'monkey see, monkey do') {
                          message.reply(`${guessed} got it first!`);
                  }
                  else
                  message.reply('Operation canceled.').then(d => d.delete({timeout: 5000}));      
                  }).catch(() => {
                  message.reply('No answer after 30 seconds, operation canceled.').then(d => d.delete({timeout: 5000}));
              });
      }
  else if(type === "https://media.discordapp.net/attachments/770574971818344448/782377489464295484/unknown.png") {
        message.channel.awaitMessages({max: 1, time: 30000}).then(collected => {
                  if(collected.first().content.toLowerCase() == 'joshua is the greatest person of all time.') {
                          message.reply(`${guessed} got it first!`);
                  }
                  else
                  message.reply('Operation canceled.').then(d => d.delete({timeout: 5000}));      
                  }).catch(() => {
                  message.reply('No answer after 30 seconds, operation canceled.').then(d => d.delete({timeout: 5000}));
              });
      }   
      // Array 3
      else if(type === "https://media.discordapp.net/attachments/770574971818344448/782398767826599997/unknown.png") {
          message.channel.awaitMessages({max: 1, time: 30000}).then(collected => {
                    if(collected.first().content.toLowerCase() == "i ate food now i'm tired") {
                            message.reply(`${guessed} got it first!`);
                    }
                    else
                    message.reply('Operation canceled.').then(d => d.delete({timeout: 5000}));      
                    }).catch(() => {
                    message.reply('No answer after 30 seconds, operation canceled.').then(d => d.delete({timeout: 5000}));
                });
        }   
        // Array 4
    else if(type === "https://media.discordapp.net/attachments/770574971818344448/782398900195033119/unknown.png") {
      message.channel.awaitMessages({max: 1, time: 30000}).then(collected => {
                if(collected.first().content.toLowerCase() == "i'm exhausted all day long") {
                        message.reply(`${guessed} got it first!`);
                }
                else
                message.reply('Operation canceled.').then(d => d.delete({timeout: 5000}));      
                }).catch(() => {
                message.reply('No answer after 30 seconds, operation canceled.').then(d => d.delete({timeout: 5000}));
            });
    } else {
        message.channel.send("Something went wrong...");
    }   
}

module.exports.help = {
    name: "typeracer"
}