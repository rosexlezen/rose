const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var sentences = [
        "https://discord.com/channels/770516707370467328/770574971818344448/782377489636917288",
        "a"
    ];
    var type = sentences[Math.floor(Math.random() * sentences.length)];

    message.channel.send("Typeracer will start in 1-10 seconds, be ready!").then(d => d.delete({timeout: 5000}));

    function awaitingMessage() {
        var min = 5,
        max = 10;

        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`Wait for ${rand} seconds!`).then(d => d.delete({timeout: 20000}));
        setTimeout(awaitingMessage, rand * 1000);
      }
      
    message.channel.send(awaitingMessage());

} 

module.exports.help = {
    name: "typeracer"
}