// OfcKing >> https://github.com/OfcKing
/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import { createHash } from 'crypto';  
import fetch from 'node-fetch';

const handler = async (m, { conn, command, usedPrefix, text }) => {

let user = global.db.data.users[m.sender];

if (!user.birth) {
return conn.reply(m.chat, `✧ No tienes una fecha de nacimiento establecida que se pueda eliminar.`, m);
}

user.birth = '';

return conn.reply(m.chat, `✐ Tu fecha de nacimiento ha sido eliminada.`, m);
};

handler.help = ['delbirth']
handler.tags = ['rg']
handler.command = ['delbirth']
export default handler;
