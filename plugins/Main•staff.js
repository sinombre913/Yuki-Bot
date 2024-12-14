/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `✐ *EQUIPO DE AYUDANTES*
🜸 *Dueño* wa.me/${creadorbot}
🜸 *Bot:* ${botname}
🜸 *Versión:* ${vs}
🜸 *Libreria:* ${libreria + baileys}

✐ *Creador:*

🜸 ઈ𓅇𝐂𝐮𝐞𝐫𝐯𝐨𝐎𝐅𝐂𓆰ࣩ֟፝𓆪
🜸 *Rol:* Creador
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
🜸 *GitHub:* https://github.com/Abrahan987

✐ *Enlaces Del Creador:*
✰ *Canal:* https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u
✰ *Grupo:* https://chat.whatsapp.com/BKVsY0Q1X8d6DWQVx3mp2J`
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
