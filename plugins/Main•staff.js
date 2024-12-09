let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `✐ *EQUIPO DE AYUDANTES*
🜸 *Dueño* ${creadorbot}
🜸 *Bot:* ${botname}
🜸 *Versión:* ${vs}
🜸 *Libreria:* ${libreria + baileys}

✐ *Propietario:*

🜸 ઈ𓅇𝐂𝐮𝐞𝐫𝐯𝐨𝐎𝐅𝐂𓆰ࣩ֟፝𓆪
🜸 *Rol:* Propietario
🜸 *Número:* wa.me/5213318360934
🜸 *GitHub:* https://github.com/Nimodo83/Yue-Bot

✐ *Colaboradores:*

🜸 OfcKing 
🜸 *Rol:* Developer
🜸 *Número:* wa.me/528713339906
🜸 *GitHub:* https://github.com/OfcKing/

🜸 Ian
🜸 *Rol:* Developer
🜸 *Número:* wa.me/5493876639332
🜸 *GitHub:* https://github.com/ianalejandrook15x/

🜸 Abrahan-m
🜸 *Rol:* Developer 
🜸 *Número:* wa.me/573237649689
🜸 *GitHub:* https://github.com/Abrahan987`
await conn.sendFile(m.chat, catalogo, 'yotsuba.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `✐ Developers`,
body: `🜸 ${dev}`,
mediaType: 1,
sourceUrl: enlace,
thumbnailUrl: catalogo 
}}
}, { mentions: m.sender })
}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
