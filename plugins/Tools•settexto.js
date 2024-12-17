/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un texto para el bot.\nEjemplo: settexto Yue-Bot');
  const texto1bot = ' • Powered By Cuervo-Team-Supreme'
  global.textbot = `${text + texto1bot}`;
  
  m.reply(`✐ El nombre del bot ha sido cambiado a: ${global.textbot}`);
};

handler.help = ['settexto'];
handler.tags = ['tools'];
handler.command = ['settexto'];
handler.owner = true;

export default handler;
