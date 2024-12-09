let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un enlace para el bot.\nEjemplo: setenlace https://whatsapp.com/channel/0029Vatvv7w2P59uIo6EHK3d');

  global.enlace = text.trim();
  
  m.reply(`✐ El nombre del bot ha sido cambiado a: ${global.enlace}`);
};

handler.help = ['setenlace'];
handler.tags = ['tools'];
handler.command = ['setenlace'];
handler.owner = false;

export default handler;