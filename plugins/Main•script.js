/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async(m, { conn, usedPrefix, command }) => {

    let textscript = `
> ✐ *Enlaces script*

> ✰ *GitHub*
> 🜸 (https://github.com/Nimodo83/Yue-Bot)

✰ *Grupo de WhatsApp*
> 🜸 (https://chat.whatsapp.com/BKVsY0Q1X8d6DWQVx3mp2J)

> ✰ *Canal de WhatsApp*
> 🜸 (https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u)
`
//let img = ''
conn.sendFile(m.chat, catalogo, 'catalogo.jpg', textscript, m)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'scripts', 'sc'] 

export default handler
