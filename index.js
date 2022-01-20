const Discord = require('discord.js')
require("dotenv").config()

const genereteImage = require("./genereteImage")

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});




Client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello world!")
    }
})

const welcomeId = '930883584036839464'

Client.on("guildMemberAdd", async (member) => {
    const img = await genereteImage(member)
    member.guild.channels.cache.get(welcomeId).send({
        content: `<@${member.id}>, Bienvenido al servidor!`,
        files: [img]
    })
})









Client.on("ready", () => {
    console.log(`Sesion iniciada como ${Client.user.tag}`),
        Client.user.setActivity('Estoy en consctruccion'), { type: "PLAYING" }
})


Client.login(process.env.TOKEN);