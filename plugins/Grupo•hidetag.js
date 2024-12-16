/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '✐ Por favor, ingresa un mensaje para enviar a todos los usuarios.', m);

  let participants = m.isGroup ? (await conn.groupMetadata(m.chat)).participants : [];
  let mentionedJid = participants.map(p => p.id);

  await conn.sendMessage(m.chat, { text: text, mentions: mentionedJid }, { quoted: m });
};

handler.help = ['hidetag'];
handler.tags = ['grupo'];
handler.command = ['hidetag', 'tag'];
handler.group = true;
handler.admin = true;

export default handler;
