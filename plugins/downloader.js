const { Sparky } = require("../index.js");
const axios = require("axios");
const fetch = require("node-fetch")
let API = "https://api-aswin-sparky.koyeb.app"

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
    //sparky.sendMessage(msg.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : msg })
sparky.sendMessage(msg.chat,{
    audio: aud ,
   // fileName: "hello" + '.mp3',
    mimetype: 'audio/mpeg', //ptt: true,
    contextInfo:{
        externalAdReply:{
            title:"jobin",
            body: "jhhhh",
            thumbnail:"https://i.imgur.com/sPc9fWc.png",
            mediaType:2,
            mediaUrl:"https://youtube.com/shorts/6HLVVMWxtYM?si=1shjEldn6pT7E8ps",
        }

    },
},{quoted: msg })
    
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
