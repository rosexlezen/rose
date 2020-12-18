const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    if(!args[0]) return;

    message.channel.send(`Fetching ${args[0]}'s Dox.`)
    .then((msg)=> {
      setTimeout(function(){
        msg.edit(`Fetching ${args[0]}'s Dox..`);
      }, 1000)
      .then((msg) => {
        setTimeout(() => {
            msg.edit(`Fetching ${args[0]}'s Dox.`);
        }, 2000)
        .then((msg) => {
            msg.edit(`hi`)
        });
      });
    }); 

} 

module.exports.help = {
    name: "uhu"
}