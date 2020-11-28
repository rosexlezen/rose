const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var timeout = Math.floor((Math.random() * 10) + 5);
    var sentences = [
        "https://discord.com/channels/770516707370467328/770574971818344448/782377489636917288",
        "a"
    ];

    message.channel.send("Typeracer will start in 5-10 seconds, be ready!").then(d => d.delete({timeout: 5000}));
    message.channel.send(timeout);

    setTimeout(function(){
        message.channel.send(```Message will automatically be deleted in 20 seconds! \n${sentences}```).then(d => d.delete({timeout: 20000})); 
    }, 2000);

} 

module.exports.help = {
    name: "typeracer"
}