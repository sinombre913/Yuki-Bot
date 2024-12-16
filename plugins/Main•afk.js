/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
const handler = async (m, {text}) => {
const user = global.db.data.users[m.sender];
user.afk = + new Date;
user.afkReason = text;
conn.reply(m.chat, `✐ *El Usuario ${conn.getName(m.sender)} Estará Inactivo*\n\n🜸 *Motivo: ${text ? ': ' + text : 'Sin Especificar!'}*
`, m);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = ['afk'];
export default handler;
