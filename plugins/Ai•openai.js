/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import Groq from 'groq-sdk';
const handler = async (m, { conn, text, usedPrefix, command }) => {
const groq = new Groq({ apiKey: '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' });
    conn.sendMessage = conn.sendMessage ? conn.sendMessage : {};
    let ya = text && m.quoted ? (m.quoted.text ? text + '\n\n' + m.quoted.text : text) : text ? text : (m.quoted ? (m.quoted.text ? m.quoted.text : false) : false);
    if (!ya) throw `\`\`\`[ ✐ ] Por favor ingresa un texto. Ejemplo: ${usedPrefix + command} Hola\`\`\``
      try {
        let { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
        if (!(m.sender in conn.sylph))
        conn.sendMessage[m.sender] = [{
          role: 'system',
          content: `Eres ${botname}, una inteligencia artificial creada por ${creadorbot}, responde de manera clara y concisa para que los usuarios entiendan mejor tus respuestas. El nombre del usuario será: ${conn.getName(m.sender)}`,
        }];
  
        if (conn.sendMessage[m.sender].length > 10) {
          conn.sendMessage[m.sender] = conn.sendMessage[m.sender].slice(-1);
        }

        conn.sendMessage[m.sender].push({
          role: 'user',
          content: ya,
        });

        let msg = [ ...conn.sendMessage[m.sender], {
          role: 'user',
          content: ya,
        }];

        const payloads = {
          messages: msg,
          model: 'llama-3.1-70b-versatile'
        };

        const json = await groq.chat.completions.create(payloads)
        let message = json.choices[0].message.content;
        conn.sendMessage[m.sender].push({
          role: "system",
          content: message,
        });
        await conn.sendMessage(m.chat, { text: message, edit: key }, { quoted: m });
      } catch (e) {
        return m.reply(e.message)
      }
  }
handler.command = ['ai2', 'openai'];
handler.help = ['openai'];
handler.tags = ['tools'];
handler.register = true 
handler.coin = 2
export default handler;
