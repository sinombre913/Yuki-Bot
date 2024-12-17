/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un dev para el bot.\nEjemplo: setdev Yue-Bot');
  const texto2bot = '© ⍴᥆ᥕᥱrᥱძ: '
  global.dev = `${texto2bot + text}`;
  
  m.reply(`✐ El nombre del bot ha sido cambiado a: ${global.dev}`);
};

handler.help = ['setdev'];
handler.tags = ['tools'];
handler.command = ['setdev'];
handler.owner = true;

export default handler;
