/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          let txtp = `✐ *Pong* ${latensi.toFixed(4)} ms`
 await conn.sendMessage(m.chat, { video: { url: videourl }, gifPlayback: true, caption: txtp,
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `${txtp}`,
body: `🜸 ${dev}`,
mediaType: 1,
sourceUrl: enlace,
thumbnailUrl: catalogo 
}}
}, { mentions: m.sender })
            });
}
handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler
