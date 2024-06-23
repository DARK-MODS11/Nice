const { Sparky } = require("../index.js");
const axios = require("axios");
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
})

async function spdl(ur)
{
let res = await axios.get(ur);
await sparky.sendMessage(msg.chat, { audio: { url: res.data.result.url }, mimetype: "audio/mpeg" });
}

Sparky(
  {
    pattern: "spotify",
    desc: "download spotify song/playlist",
    type: "downloader",
  },
  async ({sparky, msg, text}) => {
  try{
  if (!text) return await msg.reply("*provide a spotify track/playlist/album url*");
  if (!text.includes("spotify")) return await msg.reply("*provide a valid spotify url*");
if (text.includes("https://open.spotify.com/playlist/")) {
let { tracks } = await spotify.getPlaylist(text);
let op = []
tracks.map(async (u) => {
op.push(`https://api.maher-zubair.tech/download/spotify?url=https://open.spotify.com/track/${u}`)
})

for (let i = 0; i < op.length; i++) {
await spdl(op[i])
}
} else if (text.includes("https://open.spotify.com/album/")) {
let { tracks } = await spotify.getAlbum(text);
let op = []
tracks.map(async (u) => {
op.push(`https://api.maher-zubair.tech/download/spotify?url=https://open.spotify.com/track/${u}`)
})

for (let i = 0; i < op.length; i++) {
await spdl(op[i])
}
} else {
await spdl(`https://api.maher-zubair.tech/download/spotify?url=https://open.spotify.com/track/${text}`)
}
}catch (error) {
return await msg.reply("*download failed*")
}
})
