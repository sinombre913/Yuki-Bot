/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

import fs from 'fs';  
import path from 'path';  
import fetch from "node-fetch";
import crypto from "crypto";
import { FormData, Blob } from "formdata-node";
import { fileTypeFromBuffer } from "file-type";

let handler = async (m, { conn, isRowner }) => {

  if (!m.quoted || !/video/.test(m.quoted.mimetype)) return m.reply('✐ Por favor, responde a un video con el comando *setmenu* para actualizar el video del amenu.');

  try {

    const media = await m.quoted.download();
    let link = await catbox(media);
    
    if (!isImageValid(media)) {
      return m.reply('✧ El archivo enviado no es un video válido.');
    }

    global.videomenu = `${link}`;  

    await conn.sendFile(m.chat, media, 'menu.mp4', '✐ video actualizado.', m);

  } catch (error) {
    console.error(error);
    m.reply('✧ Hubo un error al intentar cambiar el banner.');
  }
};


const isImageValid = (buffer) => {
  const magicBytes = buffer.slice(0, 4).toString('hex');


  if (magicBytes === 'ffd8ffe0' || magicBytes === 'ffd8ffe1' || magicBytes === 'ffd8ffe2') {
    return true;
  }


  if (magicBytes === '89504e47') {
    return true;
  }


  if (magicBytes === '47494638') {
    return true;
  }

  return false; 
};

handler.help = ['setmenu'];
handler.tags = ['tools'];
handler.command = ['setmenu'];
handler.owner = true;

export default handler;

function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function catbox(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}
