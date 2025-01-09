/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona una bienvenida para el bot.\nEjemplo: !setwelcome Hola user');

  global.db.data.chats[m.chat].welcom1 = text.trim();
  
  m.reply(`✐ La bienvenida del bot ha sido cambiado a: ${global.welcom1}`);
};

handler.help = ['setwelcome'];
handler.tags = ['tools'];
handler.command = ['setwelcome'];
handler.owner = true;

export default handler;
