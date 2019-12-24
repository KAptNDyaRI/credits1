const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("")
setInterval(function() {
channel.send(`kaptn kaptn kaptn kaptn kaptn`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
