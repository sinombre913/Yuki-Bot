// OfcKing >> https://github.com/OfcKing
/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
const handler = async (m, { conn, command, usedPrefix }) => {

const user = global.db.data.users[m.sender];

if (!user.genre) {
return conn.reply(m.chat, '✎ No tienes un género asignado.', m)
}

user.genre = '';

return conn.reply(m.chat, '✐ Se ha eliminado tu genero', m)
};

handler.help = ['delgenre']
handler.tags = ['rg']
handler.command = ['delgenero', 'delgenre']
export default handler;
