const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs"); 
let fetch = require('node-fetch'); // idek if i'm using this

const client = new discord.Client();
client.commands = new discord.Collection();
client.login(botConfig.token);

// Command Handler
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("No Files Found!")
        return;
    }

    jsFiles.forEach((f, i) => {
        var getFiles = require(`./commands/${f}`);
        console.log(`File loaded: ${f}`);

        client.commands.set(getFiles.help.name, getFiles);
    });
});

// Bot Activity
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("use /help", {type: "COMPETING"});
});

// Commands Set-Up
client.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return message.reply("Please do not DM me 💔")

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));
    if(commands) commands.run(client, message, args);

//
//
// Deleted Messages Logs
//
//

    client.on("messageDelete", messageDeleted => {

    if(messageDeleted.author.bot) return;
    var content = messageDeleted.content;
    if(!content) content = "<Empty Message>";

    var response = `**Message ID:** ${messageDeleted.id}\n**Message Author:** ${message.author}\n**Channel:** ${messageDeleted.channel}\n**Message:** ${content}`;
    var embedMsg = new discord.MessageEmbed()
    .setAuthor(`${messageDeleted.author.tag} ( ${messageDeleted.author.id} )`, `${messageDeleted.author.avatarURL({ size:4096 })}`)
    .setDescription(response)
    .setTimestamp()
    .setColor("#d105ff");

    const channel = client.channels.cache.find(c => c.name === 'logs');
    if(!channel) return;
    channel.send(embedMsg);
    });
});

client.login(process.env.token);