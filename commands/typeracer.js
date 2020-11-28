const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var timeout = Math.floor((Math.random() * 10) + 1);
    var sentences = [
        "https://discord.com/channels/770516707370467328/770574971818344448/782377489636917288",
        "a"
    ];
    var sentences = type[Math.floor(Math.random() * type.length)];

    message.channel.send("Typeracer will start in 1-10 seconds, be ready!").then(d => d.delete({timeout: 5000}));
    message.channel.send(`(Timeout time = timeout)`);

    setTimeout(function(){
        message.channel.send(`Message will automatically be deleted in 20 seconds! \n${sentences}`).then(d => d.delete({timeout: 20000})); 
    }, timeout);

} 

module.exports.help = {
    name: "typeracer"
}