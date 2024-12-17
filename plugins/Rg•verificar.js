// OfcKing >> https://github.com/OfcKing
/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import PhoneNumber from 'awesome-phonenumber';
import axios from 'axios';
import { createHash } from 'crypto';
import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix, command, args }) => {
  let user = global.db.data.users[m.sender];
  let name2 = conn.getName(m.sender)
  let delirius = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`);
  let paisdata = delirius.data.result;
  let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido';
  let bio = 0, fechaBio;
  let sinDefinir = '😿 Es privada';
  let biografia = await conn.fetchStatus(m.sender).catch(() => null);
  if (!biografia || !biografia[0] || biografia[0].status === null) {
    bio = sinDefinir;
    fechaBio = "Fecha no disponible";
  } else {
    bio = biografia[0].status || sinDefinir;
    fechaBio = biografia[0].setAt ? new Date(biografia[0].setAt).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" }) : "Fecha no disponible";
  };
  let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://qu.ax/QGAVS.jpg');

  if (user.registered) return m.reply('✐ Ya tu estás registrado.');

  if (args.length < 2) return m.reply(`✐ Por favor, proporciona tu nombre y edad.\nEjemplo: ${usedPrefix + command} ${name2} 22`);

  let [name, age] = args;
  age = parseInt(age);
  if (isNaN(age)) return m.reply('✐ La edad debe ser un número válido.');

  user.name = name;
  user.age = age;
  user.descripcion = bio;
  user.regTime = +new Date();
  user.registered = true;
  user.coin += 40;
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  let mini = `✐ 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗔 𝗗 𝗢\n`;
  mini += `🜸 *Nombre* » ${name}\n`;
  mini += `🜸 *Edad* » ${age} años\n\n`;
  mini += `✐ 𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:\n`;
  mini += `🜸 *${moneda}* » 40\n`;
  
  await conn.sendMessage(m.chat, {
    text: mini,
    contextInfo: {
      externalAdReply: {
        title: '✧ Usuario Verificado ✧',
        body: textbot,
        thumbnailUrl: pp, 
        sourceUrl: enlace,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};

handler.help = ['reg'];
handler.tags = ['rg'];
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'];

export default handler;
