const Discord = require('discord.js')
require("dotenv").config()
const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});




Client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello world!")
    }
})











Client.on("ready", () => {
    console.log(`Sesion iniciada como ${Client.user.tag}`),
        Client.user.setActivity('Estoy en consctruccion'), { type: "PLAYING" }
})


Client.login(process.env.TOKEN);