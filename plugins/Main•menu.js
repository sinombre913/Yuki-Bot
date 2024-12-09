let handler = async (m, { conn }) => {
  let usuario = user.name
  let txt = `
𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname}
ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ Cliente ${usuario}
┃ ${moneda} ${user.coin}
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
✧ → ᴘᴀʀᴀ ᴄʀᴇᴀʀ ᴜɴ sᴜʙ-ʙᴏᴛ ᴄᴏɴ ᴛᴜ ɴᴜᴍᴇʀᴏ ᴜᴛɪʟɪᴢᴀ *#serbot* o *#serbot code*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
✧ *Menú de Comandos* ✧

✐ *!s • !sticker*
> ➣ Realiza un sticker.

✐ *!wm*
> ➣ Cambiar el nombre del sticker.

✐ *!token • !gettoken*
> ➣ Obtén el token del socket.

✐ *!socket • !bots*
> ➣ Ver todos loa sockets activos.

✐ *!serbot • !serbot code • !serbot --code*
> ➣ Convierte en un socket.

✐ *!reg • !verificar • !register*
> ➣ Registra tu nombre y edad en el bot.

✐ *!unreg*
> ➣ Elimina tu registro del bot.

✐ *!setgenre • !setgenero*
> ➣ Establece tu género en el perfil del bot.

✐ *!delgenre • !delgenero*
> ➣ Elimina tu género del perfil del bot.

✐ *!setbirth • !setnacimiento*
> ➣ Establece tu fecha de nacimiento en el perfil del bot.

✐ *!delbirth • !delnacimiento*
> ➣ Elimina tu fecha de nacimiento del perfil del bot.

✐ *!setdescription • !setdesc*
> ➣ Establece una descripción en tu perfil del bot.

✐ *!deldescription • !deldesc*
> ➣ Elimina la descripción de tu perfil del bot.

✐ *!setname*
> ➣ Cambia el name del Bot.

✐ *!setmoneda*
> ➣ Cambia la moneda del Bot.

✐ *!setenlace*
> ➣ Cambia el enlace del Bot.

✐ *!setbanner*
> ➣ Cambia la imagen del menú del Bot.

✐ *!setowner*
> ➣ Cambia el owner del Bot.

✐ *#addowner*
> ➣ Agrega un numero como owner.

✐ *#delowner*
> ➣ Elimina un numero como owner.

✐ *!setcreador*
> ➣ cambia el numero del dueño.

✐ *!marry* [mension / etiquetar]
> ➣ Propón matrimonio a otro usuario.

✐ *!hidetag*
> ➣ Envia un mensaje mencionando a todos los usuarios

✐ *!tourl*
> ➣ Convierte imagen en url.

✐ *!tiktok • !tt*
> ➣ Descarga videos de TikTok.

✐ *!pinterest*
> ➣ Busca y descarga imágenes de Pinterest.

✐ *!play • !play2*
> ➣ Descarga música/video de YouTube.

✐ *!fb • !facebook*
> ➣ Descarga videos de Facebook.

✐ *!ig • !instagram*
> ➣ Descarga contenido de Instagram.

✐ *!imagen*
> ➣ Busca y descarga imágenes desde Internet.

✐ *!profile*
> ➣ Muestra tu perfil de usuario.

✐ *!comprarpremium*
> ➣ Usar el bot sin limíte

✐ *!daily*
> ➣ Pide recompensa diaria.

✐ *!w*
> ➣ Trabaja y obtén ${moneda}.

✐ *!slut*
> ➣ Protituirse y obtener ${moneda}.

✐ *!crime*
> ➣ Roba y obtén ${moneda}.

✐ *!cf*
> ➣ Apuesta y obtén ${moneda}.

✐ *!rt*
> ➣ black Jack (ruleta) y obtén ${moneda}.

✐ *!rob* [mension / etiquetar]
> ➣ Roba ${moneda} al usuario mencionando.

✐ *!bank • !banco* [mension / etiquetar]
> ➣ Revisa tu cuenta del banco o la de un usuario mencionando.

✐ *!cartera • !wallet* [mension / etiquetar]
> ➣ Revisa tu cartera o la de un usuario mencionando.

✐ *!retirar • !wd* [cantidad(un número) / all]
> ➣ Retira tu dinero del banco.

✐ *!dep • !aguardar* [cantidad(un número) / all]
> ➣ Guarda tus ${moneda} en el banco.

✐ *!rw*
> ➣ Para reclamar un personaje.

✐ *!c*
> ➣ Reclama el personaje.

✐ *!robarrw • !robarpersonaje*
> ➣ Robar el personaje de un usuario.

✐ *!harem • !ob*
> ➣ Rebisa tus personajes obtenidos.

✐ *!toprw*
> ➣ Los usuarios con mejores personajes.

✐ *!link*
> ➣ El bot envia el link del grupo.

✐ *!mute* [mension / etiquetar]
> ➣ El bot elimina los mensajes del usuario.

✐ *!unmute* [mension / etiquetar]
> ➣ El bot deja de eliminar los mensajes del usuario.

✐ *!grupo • !group* [open / abrir]
> ➣ Cambia ajustes del grupo para que todos los usuarios envien mensaje.

✐ *!grupo • !gruop* [close / cerrar]
> ➣ Cambia ajustes del grupo para que solo los administradores envien mensaje.

✐ *!kick* [número / mension]
> ➣ Elimina un usuario de un grupo.

✐ *!add* [número]
> ➣ Invita a un usuario a tu grupo.

✐ *!promote* [mension / etiquetar]
> ➣ El bot dara administrador al usuario mencionando.

✐ *!demote* [mension / etiquetar]
> ➣ El bot quitara administrador al usuario mencionando.

✐ *!script*
> ➣ Datos del bot original.

✐ *!staff*
> ➣ El equipo de desarrollo de ${botname}.

✐ *!addprem* [mension / etiquetar]
> ➣ Un dueño da premium al usuario.

✐ *!delprem* [mension / etiquetar]
> ➣ Un dueño le quitara premium al usuario.

✐ *!autoadmin*
> ➣ El bot dara administrador al dueño.
  `.trim();

let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')

  //await conn.sendFile(m.chat, imagen1, 'menu.jpg', txt, m);
  //await conn.sendMini(m.chat, botname, textbot, , img, img, rcanal, estilo)
  await conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: { title: botname, body: textbot, thumbnailUrl: banner, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];
handler.register = true;

export default handler;