/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async (m, { conn, text}) => {
if (!text) return m.reply('✐ *Ingresa el @tag de algún usuario.*')
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return m.reply('✐ *Ingresa el @tag de algún usuario.*')
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `✐ *El usuario @${who.split('@')[0]}, fue baneado con éxito.*`, { mentions: [who]})
}
handler.help = ['banuser <@tag> <razón>']
handler.command = ['banuser']
handler.tags = ['owner']
handler.owner = true
export default handler
