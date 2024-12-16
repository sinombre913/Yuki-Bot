/* agrega lo siguiente en el package.json 
 "canvafy": "^7.2.0",
 agrega en el apartado de dependencias
 -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import canvafy from 'canvafy';

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
   // let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome)
  //  let pp2 = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => adios)
  let img = await (await fetch(`${catalogo}`)).buffer()
  let img2 = await (await fetch(`${catalogo}`)).buffer()

let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType == 27) {
          const imagewel = await new canvafy.WelcomeLeave()
            .setAvatar(img) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Bienvenid@ ${userName}`)
            .setDescription(`Al Grupo\n${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
    let wel = `┌─★ ${botname}\n│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮\n   │ ${groupMetadata.subject}\n   └───────────────┈ ⳹`
    await conn.sendMessage(m.chat, { image: imagewel, caption: wel }, { quoted: fkontak })
//await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
          const imagebye = await new canvafy.WelcomeLeave()
            .setAvatar(img2) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Adiós ${userName}`)
            .setDescription(`${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
   let bye = `┌─★ ${botname}\n│「 𝗔𝗗𝗜𝗢𝗦 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗦𝗲 𝗳𝘂𝗲\n   │ 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   └───────────────┈ ⳹`
   await conn.sendMessage(m.chat, { image: imagebye, caption: bye }, { quoted: fkontak })
//await conn.sendMini(m.chat, packname, dev, bye, img2, img2, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
          const imagekick = await new canvafy.WelcomeLeave()
            .setAvatar(img2) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Fuera Put@ ${userName}`)
            .setDescription(`${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
    let kick = `┌─★ ${botname}\n│「 𝗔𝗗𝗜𝗢𝗦 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗦𝗲 𝗳𝘂𝗲\n   │ 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   └───────────────┈ ⳹`
    await conn.sendMessage(m.chat, { image: imagekick, caption: kick }, { quoted: fkontak })
//await conn.sendMini(m.chat, packname, dev, kick, img2, img2, channel, fkontak)
}}

/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cUYg.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "  ͟͞ Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ ͟͞  ",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "showAdAttribution": true,
          "containsAutoReply": true,
          "title": '  ͟͞ Ａ Ｄ Ｉ Ｏ́ Ｓ ͟͞  ',
          body: `${userName}, se despide.`,
          "previewType": "PHOTO",
          "thumbnailUrl": '',
          "thumbnail": adi,
          "sourceUrl": redes
        }
      }
    }, { quoted: fkontak });
  }
}*/
