/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un mensaje de eliminación para el bot.\nEjemplo: !seteliminada adios puto');

  global.welcom3 = text.trim();
  
  m.reply(`✐ El mensaje de eliminación del bot ha sido cambiado a: ${global.welcom3}`);
};

handler.help = ['seteliminada'];
handler.tags = ['tools'];
handler.command = ['seteliminada'];
handler.owner = true;

export default handler;
