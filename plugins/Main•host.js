let handler = async (m, { conn, usedPrefix, command, text }) => {

let txt = `Hola Buenas Acá ઈ𓅇𝐂𝐮𝐞𝐫𝐯𝐨𝐎𝐅𝐂𓆰ࣩ֟፝𓆪, Cuervo-Team-Supreme Creo Un Bot Totalmente Editable Desde WhatsApp, La Mejor Parte Es Que El Bot Está Como Pre-Bot En El Mejor Hosting De Calidad, Prueba Yue-Bot Con HostingPy Lo Mejor En Calidad https://dahs.hostingpy.shop

(no me vendí y en el canal próximamente se verán anuncios de HostingPy)` 

await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363319941046209@newsletter', 
serverMessageId: '', 
newsletterName: 'HostingPy' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `HostingPy Un Host De Calidad`,
body: dev,
"previewType": "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/y72e4j.jpg', 
sourceUrl: 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u'}}},
{ quoted: m })
} 

handler.help = ['hostinhpy']
handler.tags = ['main']
handler.command = ['hostingpy', 'host']

export default handler