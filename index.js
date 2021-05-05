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

// Main Bot Code
client.on('message', async message => {
  const embed = new Discord.MessageEmbed()

  if (message.content.startsWith(`${pre}hentai spam`)) {
    if (message.channel.nsfw) {
      for (i = 0; i <= 10; i++) {
        let hentai = await anime.hentai()
        message.channel.send(hentai)
      }
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  }
  if (message.content.startsWith(`${pre}hentai`)) {
    if (message.channel.nsfw) {
      let hentai = await anime.hentai()
      message.channel.send(hentai)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}thighs`)) {
    if (message.channel.nsfw) {
      let thighs = await anime.thighs()
      message.channel.send(thighs)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}swimsuit`)) {
    if (message.channel.nsfw) {
      let swimsuit = await anime.swimsuit()
      message.channel.send(swimsuit)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}hanal`)) {
    if (message.channel.nsfw) {
      let hanal = await anime.hanal()
      message.channel.send(hanal)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}neko`)) {
    if (message.channel.nsfw) {
      let neko = await anime.neko()
      message.channel.send(neko)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}kistsune`)) {
    if (message.channel.nsfw) {
      let kistsune = await anime.kistsune()
      message.channel.send(kistsune)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
  } if (message.content.startsWith(`${pre}holo`)) {
    if (message.channel.nsfw) {
      let holo = await anime.holo()
      message.channel.send(holo)
    } else {
      message.channel.send("Please enable NSFW to use this command!")
    }
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