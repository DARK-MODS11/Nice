const { Sparky } = require("../index.js");
const { findMusic, qdownload } = require("../functions.js");
  Sparky(
  {
    pattern: "find",
    desc: "find music",
    type: "user",
  },
  async ({sparky, msg, text}) => {
    if (!msg.replied) return await msg.reply("*reply to a short video or audio*");
    let buff = await qdownload(msg.replied);
    let result = await findMusic(buff);
    let data = `𝘵𝘪𝘵𝘭𝘦: ${result.title}\n𝘢𝘳𝘵𝘪s𝘵𝘴: ${result.artists}\𝘯𝘳𝘦𝘭𝘦𝘢𝘴𝘦: ${result.release_date}\𝘯𝘺𝘰𝘶𝘵𝘶𝘣𝘦: ${result.youtube}\𝘯𝘴𝘱𝘰𝘵𝘪𝘧𝘺: ${result.spotify}`;

    return await sparky.sendMessage(msg.chat , { text: data } , { quoted: msg })
  }
);
