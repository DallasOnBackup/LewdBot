const lewd = require("discord-hentai");
const anime = lewd.Anime;
const express = require('express')
const app = express()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const port = 3000
var pre = "am!"

// Server Listening
app.get('/', (req, res) => res.send(`Lewd successfully deployed!`))
app.listen(port)

// Client Login
client.login(process.env.Token).catch(console.error)

function commandParse(msg, embed, cmd) {
  if (!msg.channel.nsfw && cmd != "help") {
    embed.setTitle("NSFW Channel Required!")
    .setDescription("Please enable NSFW to use lewd commands!")

    message.channel.send(embed)
    return false
  }
  if (msg.content.toLowerCase().startsWith(pre + cmd)) {
    return true
  } else {
    return false
  }
}

// Main Bot Code
client.on('message', async message => {
  const embed = new Discord.MessageEmbed()
  .setColor()

  if (commandParse(message, embed, "hentai")) {
    let hentai = await anime.hentai()
    message.channel.send(hentai)
  } if (commandParse(message, embed, "thighs")) {
    let thighs = await anime.thighs()
    message.channel.send(thighs)
  } if (commandParse(message, embed, "swimsuit")) {
    let swimsuit = await anime.swimsuit()
    message.channel.send(swimsuit)
  } if (commandParse(message, embed, "hanal")) {
    let hanal = await anime.hanal()
    message.channel.send(hanal)
  } if (commandParse(message, embed, "neko")) {
    let neko = await anime.neko()
    message.channel.send(neko)
  } if (commandParse(message, embed, "kistsune")) {
    let kistsune = await anime.kistsune()
    message.channel.send(kistsune)
  } if (commandParse(message, embed, "holo")) {
    let holo = await anime.holo()
    message.channel.send(holo)
  } if (commandParse(message, embed, "help")) {
    embed.setTitle("Command List")
    .setDescription(`${pre}hentai \n ${pre}thighs \n ${pre}hanal \n ${pre}neko \n ${pre}holo`)

    message.channel.send(embed)
  }
})

// When bot is Ready, Log to Console
client.on('ready', () => {
  console.log(`Successfully logged into Lewd as ${client.user.tag}!`)
  client.user.setPresence({
    status: 'online',
      activity: {
        name: `Hentai`,
        type: "WATCHING"
      }
  })
})