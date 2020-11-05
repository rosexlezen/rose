const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("please use /rps Rock, Paper or Scissors")
    //if (message.contains != "Rock" || message.contains != "Paper" || message.contains != "Scissors")

        var option = ["rock", "paper", "scissors"]
        var result = option[Math.floor(Math.random() * option.length)];

        if (args[0].toUpperCase() == "ROCK") {

            if (result == "paper") {
            return message.channel.send(`I have **${result}** :notepad_spiral:, I win`);
        } else if (result == "scissors") {
            return message.channel.send(`I have **${result}** :scissors:, you win`);
        } else if (result == "rock") {
            return message.channel.send(`I have **${result}** :moyai:, it's a tie`);
        } 
    } else if (args[0].toUpperCase() == "PAPER") {

            if (result == "scissors") {
            return message.channel.send(`I have **${result}** :scissors:, I win`);
        } else if (result == "rock") {
            return message.channel.send(`I have **${result}** :moyai:, you win`);
        } else if (result == "paper") {
            return message.channel.send(`I have **${result}** :notepad_spiral:, it's a tie`);
        } 
    } else if (args[0].toUpperCase() == "SCISSORS") {

        if (result == "rock") {
        return message.channel.send(`I have **${result}** :moyai:, I win`);
    } else if (result == "paper") {
        return message.channel.send(`I have **${result}** :notepad_spiral:, you win`);
    } else if (result == "scissors") {
        return message.channel.send(`I have **${result}** :scissors:, it's a tie`);
    }
}

} 

module.exports.help = {
    name: "rps"
}
