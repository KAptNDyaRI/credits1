const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657593704441315338")
setInterval(function() {
channel.send(`kaptn1 kaptn1 kaptn1 kaptn11 kaptn1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);