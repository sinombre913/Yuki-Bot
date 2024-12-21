const {downloadContentFromMessage} = (await import('@whiskeysockets/baileys'));

const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language

  if (!m.quoted) { conn.reply(m.chat, '✐ ᏒᎬᏕᏢᎾᏁᎠᎬ Ꭿ ᏬᏁ ᎷᎬᏁᏕᎯᏠᎬ ᏅᏬᎬ ᎻᎯᎽᎯ ᏕᎨᎠᎾ ᎬᏁᏉᎨᎯᎠᎾ ᎬᏁ ᏉᎨᎬᏯᎾᏁᏨᎬ (ᏉᎬᏒ ᏕᎾᏝᎾ ᏬᏁᎯ ᏉᎬᏃ)', m);
return;
}
  if (m.quoted.mtype !== 'viewOnceMessageV2') { conn.reply(m.chat, '✐ ᎬᏝ ᎷᎬᏁᏕᎯᏠᎬ ᏕᎬᏝᎬᏨᏨᎨᎾᏁᎯᎠᎾ ᏁᎾ ᎬᏕ ᏉᎨᎬᏯᎾᏁᏨᎬ (ᏉᎬᏒ ᏕᎾᏝᎾ ᏬᏁᎯ ᏉᎬᏃ)', m)
return;
}
  const msg = m.quoted.message;
  const type = Object.keys(msg)[0];
  const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m);
  } else if (/image/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m);
  }
};
handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = ['readviewonce','read','revelar','readvo'];
export default handler;