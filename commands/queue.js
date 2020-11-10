const discord = require("discord.js");
const fs = require('fs');
client.queue = require('./data/queue.json');

module.exports.run = async(client, message, args) => {

    if(args[0] === "join") {
        //message.reply("you have succesfully joined the queue!");
        client.queue[message.author.username]
    }

    fs.writeFile("./data/queue.json", JSON.stringify(client.queue. null, 4), err => {
        if(err) console.log(err);
        message.reply("you have succesfully joined the queue!");
    });

    // if(args[0] === "list") {
    //     message.reply("this feature is coming soon!");
    // }

    // if(!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry but you can't do this.")
    // if(args[0] === "remove") {
    //     message.reply("this feature is coming soon!");
    // }

    // if(!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry but you can't do this.")
    // if(args[0] === "add") {
    //     message.reply("this feature is coming soon!");
    // }

    // if(!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry but you can't do this.")
    // if(args[0] === "next") {

    // }

} 

module.exports.help = {
    name: "queue"
}