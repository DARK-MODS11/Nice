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
const res = await axios.get(`https://aswin-sparky-api.cyclic.app/api/downloader/youtube_play_mp3?apikey=E5BlGG2eGicBFWpxEOHq&search=${text}`)
let response = await res.data
const aud = await (await fetch(`${response.data.url}`)).buffer()
sparky.sendMessage(`_*Downloading ${response.data.title}*_`)
  }
  );
