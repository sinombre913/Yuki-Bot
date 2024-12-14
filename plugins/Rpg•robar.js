const ro = 30;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob2 + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob2 < 7200000) {
  conn.reply(m.chat, `*✐ Hey! Espera ${msToTime(time - new Date())} para volver a robar*`, m);
  return;
  }
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) {
  conn.reply(m.chat, `*✐ Etiqueta al usuario.*`, m)
  return;
    };
  if (!(who in global.db.data.users)) { 
  conn.reply(m.chat, `*✐ El usuario no se encuentra en mi base de datos.*`, m)
return;
  }
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.coin < rob) return conn.reply(m.chat, `✐ @${who.split`@`[0]} Tiene menos de *${ro} ${moneda}*\n🜸No robes a un pobre :v`, m, {mentions: [who]});
  global.db.data.users[m.sender].coin += rob;
  global.db.data.users[who].coin -= rob;
  conn.reply(m.chat, `*✐ Robastes ${rob} ${moneda} a @${who.split`@`[0]}*`, m, {mentions: [who]});
  global.db.data.users[m.sender].lastrob2 = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['rpg'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
