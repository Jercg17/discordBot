const Canvas = require("canvas")
const Discord = require("discord.js")
const background = 'https://w.wallhaven.cc/full/e7/wallhaven-e7y71l.jpg'

const dim = {
    height: 465,
    width: 827,
}

const av = {
    size: 256,
    x: 827,
    y: 465
}


const genereteImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({ format: "png", dynamic: false, size: av.size })

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //Carga la imagen en el canvas 
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)


    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = genereteImage