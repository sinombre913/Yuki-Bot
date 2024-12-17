/* QUEDA PROHIBIDO EDITAR ESTOS CREDITOS
 Powered By Cuervo-Team-Supreme 
ya se te deja editar mucho del bot deja nuestros créditos lacra no seas puerca y respeta
att: Cuervo-Team-Supreme
(agrega tus creditos no borres o cambies)
*/

let cooldown = 14400000
let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 50)
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastmiming < cooldown) throw m.reply(`✐ _Ya has minado regresa a la mina en_ *${msToTime((user.lastmiming + cooldown) - new Date())}*`);
  user.coin += hasil
  conn.reply(m.chat, `✐ *Recompensa de la mina*
🜸 ${moneda} : *+${hasil}*`, m)
  user.lastmiming = new Date * 1
}
handler.help = ['mine']
handler.tags = ['rpg']
handler.command = ['minar', 'miming', 'mine'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + ` ${mssg.hour} ` + minutes + ` ${mssg.minute}`
}
