/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
// import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.autoRechazar) {
const prefixes = ['6', '90', '963', '966', '967', '249', '212', '92', '93', '94', '7', '49', '2', '91', '48']
if (prefixes.some(prefix => m.sender.startsWith(prefix))) {
await conn.groupRequestParticipantsUpdate(m.chat, [m.sender], 'reject')
}}}

export default handler
