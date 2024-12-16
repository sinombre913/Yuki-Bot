/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
const handler = async (m, {conn}) => {

conn.reply(m.chat, `MENSAJE DEL DESARROLLADOR 😊

⚠️ ADVERTENCIA DEL CREADOR ${creadorbot} ⚠️

Yo no me hago responsable del mal uso del bot o subbot, cada persona maneja el bot a su manera. Yo no me hago cargo de lo que le puede pasar a su cuenta de WhatsApp.

El bot es simple pero con comandos divertidos, para ver los comandos utiliza: !menu.

Bot uso publico para todas las personas que le guste usarlo, gracias por preferir nuestro servicio. 🌟

💥 ¡Contactanos! 💥

👑 Creador:
• wa.me/${global.creadorbot}

${global.botname}`, m)

}
//handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones|tyc/i
handler.command = ['tyc'];
handler.register = true;
export default handler
