const { Sparky } = require("../index.js");
const axios = require("axios");
const fetch = require("node-fetch")
let API = "https://aswin-sparky.koyeb.app"

Sparky(
  {
    pattern: "play",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
if(!msg.isGroup) 
return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
const res = await axios.get(`${API}/downloader/play?search=${text}`)
let response = await res.data
sparky.sendMessage(msg.chat, { text: `*Downloading ${response.data.title}*` },{ quoted: msg})
const aud = await (await fetch(`${response.data.url}`)).buffer()
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
//if(!msg.isGroup) 
//return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
let result = await axios.get(`${API}/downloader/yt_video?search=${text}`);
var yt = result.data
sparky.sendMessage(msg.chat, { video :{ url: yt.result.url }, caption: `*${yt.result.title}*`}, {quoted: msg })
  }
  );

Sparky(
  {
    pattern: "ytv",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
//if(!msg.isGroup) 
//return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
    var ytmp4 = await fetch(`https://vihangayt.me/download/ytmp4?url=${text}`);
    var yt = await ytmp4.json();
    sparky.sendMessage(msg.chat, { video :{ url: yt.data.vid_360p }, caption: `*${yt.data.title}*`}, {quoted: msg })
  }
  );
