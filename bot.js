const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("644083704284708874")
setInterval(function() {
channel.send(`يا عباس يا عباس يا عباس فزنا على ايران`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
