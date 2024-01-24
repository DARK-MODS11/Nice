const { Sparky } = require("../index.js");
const axios = require("axios");
const fetch = require("node-fetch")

Sparky(
  {
    pattern: "song",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
const res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
let response = await res.data
const aud = await (await fetch(`${response.data.downloadUrl}`)).buffer()
    sparky.sendMessage(msg.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : msg })
//sparky.sendMessage(`_*Downloading ${response.data.title}*_`)
  }
  );
