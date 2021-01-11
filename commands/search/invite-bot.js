const Discord = require("discord.js");
const db = require("wio.db");
module.exports = {
  name: "inbot",
  category: "search",
  description: "Get bot ping :/",
  usage: "ping",
  run: async (client, message, args) => {
   message.delete();
    const msgg = args.join(" ");
   const ar = args
    if (!msgg) return message.channel.send("Please Give ID Bot");
    if (msgg.length > 18) return message.channel.send("Too Long ID - 18 Limit");
    if (isNaN(msgg))return message.reply("Ini bukan ID")  
    return message.channel.send(`link Botnya adalah [Clink di sini](https://discord.com/oauth2/authorize?client_id=${ar}&scope=bot&permissions=8)`).then(m => {
      m.react("✅")
      m.react("❌")
    })
 
  
     }

};