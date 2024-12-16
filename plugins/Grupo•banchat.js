/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✐ *Este chat fue baneado con éxito*`, m)

}
handler.help = ['banchat']
handler.tags = ['grupo']
handler.command = ['banchat']
handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler
