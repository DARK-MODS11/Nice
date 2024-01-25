const { Sparky } = require("../index.js");
const axios = require("axios");
const fetch = require("node-fetch")

Sparky(
  {
    pattern: "play",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
if(!msg.isGroup) 
return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
const res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
let response = await res.data
sparky.sendMessage(msg.chat, { text: `*Downloading ${response.data.title}*` },{ quoted: msg})
const aud = await (await fetch(`${response.data.downloadUrl}`)).buffer()
    sparky.sendMessage(msg.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : msg })
  }
  );

Sparky(
  {
    pattern: "video",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
    /*
//if(!msg.isGroup) 
//return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
const res = await axios.get(`https://aswin-sparky-api.up.railway.app/downloader/yt_video?search=kerosine`)
let response = await res.data
sparky.sendMessage(msg.chat, { text: `*Downloading ${response.data.title}*` },{ quoted: msg})
const vid = await (await fetch(`${response.data.url}`)).buffer()
    sparky.sendMessage(msg.chat , {video : vid} , { quoted : msg })
    */
    var ytmp4 = await fetch(`https://aswin-sparky-api.up.railway.app/downloader/yt_video?search=${text}`);
        var yt = await ytmp4.json();
        sparky.sendMessage(msg.chat, { video :{ url: yt.data.url }, caption: `*${yt.data.title}*`}, {quoted: msg })
  }
  );
