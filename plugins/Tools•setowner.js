/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let handler = async (m, { conn, text, isRowner }) => {
    let amount = text.trim();
    if (!/^\d+$/.test(amount)) {
        return conn.reply(m.chat, '✐ Solo se permiten números.', m);
    }

    amount = parseInt(amount);
    global.creadorbot = amount;
    m.reply(`✐ El creador del bot ha sido cambiado a: ${global.creadorbot}`);
};

handler.help = ['setcreador'];
handler.tags = ['tools'];
handler.command = ['setcreador'];
handler.owner = true;

export default handler;
