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

});

client.login(process.env.token);