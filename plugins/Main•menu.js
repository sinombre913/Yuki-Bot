let handler = async (m, { conn }) => {

  let txt = `
𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname}
ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
⏤͟͟͞͞✦ Enlace: ${enlace}
⏤͟͟͞͞✦ Bot: ${botname}
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

✐ *!comprarpremium*
> ➣ Usar el bot sin limíte

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

✐ *!profile*
> ➣ Muestra tu perfil de usuario.

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

✐ *!marry*
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

✐ *!daily*
> ➣ Pide Recompensa diaria.

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

✐ *!rw*
> ➣ Para reclamar un personaje.

✐ *!c*
> ➣ Reclama el personaje.

✐ *!robarrw* / *!robarpersonaje*
> ➣ Robar el personaje de un usuario.

✐ *!harem* / *!ob*
> ➣ Rebisa tus personajes obtenidos.

✐ *!toprw*
> ➣ Los usuarios con mejores personajes.
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