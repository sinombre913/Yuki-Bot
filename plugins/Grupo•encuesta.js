/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0]) throw m.reply(`✐️ *_Ingrese un texto para iniciar la escuesta._*\n\n🜸 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`);
if (!text.includes('|')) throw  m.reply(`✐️ Separe las encuestas con *|* \n\n✐ Ejemplo : \n*${usedPrefix + command}* texto|texto2...`);
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) {
a.push([b[c]])
                        }
                        return conn.sendPoll(m.chat, `${botname}`, a, m)
}
handler.help = ['encuesta <text|text2>']
handler.tags = ['grupo'] 
handler.command = ['poll', 'encuesta'] 
handler.group = true

export default handler
