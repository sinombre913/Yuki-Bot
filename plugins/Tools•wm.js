/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
// OfcKing >> https://github.com/OfcKing

import { addExif } from '../lib/sticker.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.quoted) return m.reply(`✐ Por favor, responde a un sticker con el comando *${usedPrefix + command}* seguido del nuevo nombre.\nEjemplo: *${usedPrefix + command} Nuevo Nombre*`);

  const sticker = await m.quoted.download();
  if (!sticker) return m.reply('✐ No se pudo descargar el sticker.');

  const texto = text.trim() || 'MiPaquete';
  const exif = await addExif(sticker, texto);

  await conn.sendMessage(m.chat, { sticker: exif }, { quoted: m });
};

handler.help = ['wm'];
handler.tags = ['tools'];
handler.command = ['wm'];
handler.register = true;

export default handler;
