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
