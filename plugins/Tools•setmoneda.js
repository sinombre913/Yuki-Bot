/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un nombre para el bot.\nEjemplo: setmoneda Coins');

  global.moneda = text.trim();
  
  m.reply(`✐ La moneda del bot ha sido cambiado a: ${global.moneda}`);
};

handler.help = ['setmoneda'];
handler.tags = ['tools'];
handler.command = ['setmoneda'];
handler.owner = true;

export default handler;
