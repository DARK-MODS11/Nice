const acrcloud = require('.')
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

async function qdownload(ss) {
let type = Object.keys(msg.replied)[0];
let mimeMap = {
        imageMessage: "image",
        videoMessage: "video",
        stickerMessage: "sticker",
        documentMessage: "document",
        audioMessage: "audio",
    };
let mes = ss
const stream = await downloadContentFromMessage(
                mes[type],
                mimeMap[type]
            );
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }
return buffer
}

async function findMusic(buffer) {
    let acr = new acrcloud({
      host: "identify-eu-west-1.acrcloud.com",
      access_key: "4dcedd3dc6d911b38c988b872afa7e0d",
      access_secret: "U0PEUg2y6yGVh6NwJra2fJkiE1R5sCfiT6COLXuk",
    });
  
    let res = await acr.identify(buffer);
    let { code, msg } = res.status;
    if (code !== 0) return msg;
    let { title, artists, album, genres, release_date, external_metadata } =
      res.metadata.music[0];
    let { youtube, spotify } = external_metadata;
  
    return {
      status: 200,
      title: title,
      artists: artists !== undefined ? artists.map((v) => v.name).join(", ") : "",
      album: album.name || "",
      genres: genres !== undefined ? genres.map((v) => v.name).join(", ") : "",
      release_date: release_date,
      youtube: `https://www.youtube.com/watch?v=${youtube?.vid}`,
      spotify: `https://open.spotify.com/track/` + spotify?.track?.id,
    };
  }

module.exports = { qdownload, findMusic };
