const { Sparky } = require("../index.js");
const axios = require("axios");
const fetch = require("node-fetch")
let API = "https://api-aswin-sparky.koyeb.app"
let botname = "𝝒𝜶𝜹𝜾ꪑ.𝝒"
Sparky(
  {
    pattern: "play",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
const res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
let response = await res.data
sparky.sendMessage(msg.chat, { text: `*Downloading ${response.data.title}*` },{ quoted: msg})
const aud = await (await fetch(`${response.data.downloadUrl}`)).buffer()
    //sparky.sendMessage(msg.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : msg })
sparky.sendMessage(msg.chat,{
    audio: aud ,
    mimetype: 'audio/mpeg', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:`${response.data.title}`,
            body: `${botname}`,
            thumbnail: await (await fetch(`${response.data.thumbnail}`)).buffer(),
            mediaType:2,   
showAdAttribution: true,             
           sourceUrl: `${response.data.url}`,
            mediaUrl: `${response.data.url}`,
        }

    },
},{quoted: msg })    
  }
  );

Sparky(
  {
    pattern: "song",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
const res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
let response = await res.data
sparky.sendMessage(msg.chat, { text: `*Downloading ${response.data.title}*` },{ quoted: msg})
const aud = await (await fetch(`${response.data.downloadUrl}`)).buffer()
    //sparky.sendMessage(msg.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : msg })
sparky.sendMessage(msg.chat,{
    audio: aud ,
    mimetype: 'audio/mpeg', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:`${response.data.title}`,
            body: `${botname}`,
            thumbnail: await (await fetch(`${response.data.thumbnail}`)).buffer(),
            mediaType:2,   
showAdAttribution: true,             
           sourceUrl: `${response.data.url}`,
            mediaUrl: `${response.data.url}`,
        }

    },
},{quoted: msg })    
  }
  );

Sparky(
  {
    pattern: "yta",
    desc: "To check ping",
    type: "user",
  },
  async ({sparky , msg, text}) => {
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
//if(!msg.isGroup) 
//return await sparky.sendMessage(msg.chat, { text: "*This is a Group Command*" },{ quoted: msg})
let result = await axios.get(`${API}/api/downloader/yt_video?search=${text}`);
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

async function getBuffer(url, options) {
  try {
    options ? options : {};
    const res = await require("axios")({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
}

Sparky(
  {
    pattern: "insta",
    desc: "instagram downloader",
    type: "downloader",
  },
  async ({sparky , msg, text}) => {
    if (!text) return await msg.reply("link thada pundachii");
    if (!text.includes("www.instagram.com/")) return await msg.reply("Instagram link thada pundachii");
let { data } = await axios.get(`https://profile-4h33.onrender.com/api/download/insta?url=${text}`)

for (let i = 0; i < data.data.length; i++) {
let ur = data.data[i].download_link;
let buf = await getBuffer(ur);
let { mime } = await require("file-type").fromBuffer(buf);
if (mime == "video/mp4") {
await sparky.sendMessage(msg.chat, { video: { url: ur }, mimetype: "video/mp4", caption: "𝘉𝘢𝘥𝘢𝘯 𝘚𝘦𝘳" })
} else {
await sparky.sendMessage(msg.chat, { image: { url: ur }, mimetype: "image/jpeg", caption: "𝘉𝘢𝘥𝘢𝘯 𝘚𝘦𝘳" })
}
}
});
