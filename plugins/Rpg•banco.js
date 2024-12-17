/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import db from '../lib/database.js'
let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return m.react('✖️')
   if (!(who in global.db.data.users)) return m.reply(`✐El usuario no se encuentra en mi base de datos*`)
   let user = global.db.data.users[who]
   const texto = `${who == m.sender ? `✐ Tienes: *${user.bank} ${moneda}* en el banco.` : `✐ Ese usuario tiene *${user.bank} ${moneda}* en el Banco`}`

   await conn.reply(m.chat, texto, m)
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = ['bank', 'banco'] 
handler.register = true 
export default handler 
