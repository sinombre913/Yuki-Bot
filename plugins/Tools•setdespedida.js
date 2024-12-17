/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un mensaje de despedida para el bot.\nEjemplo: !setdespedida adios user');

  global.welcom2 = text.trim();
  
  m.reply(`✐ La despedida del bot ha sido cambiado a: ${global.welcom2}`);
};

handler.help = ['setdespedida'];
handler.tags = ['tools'];
handler.command = ['setdespedida'];
handler.owner = true;

export default handler;
